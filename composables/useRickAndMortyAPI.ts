import type { Character, CharactersInfo, Criteria, FetchCharacterByNameResult, FetchCharactersResult } from '#types'

const GRAPHQL_ENDPOINT = 'https://rickandmortyapi.com/graphql'

const charactersQuery = `
  query ($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  }
`

const characterByNameOrId = (criteria: Criteria) => {
  const isNameSearch = typeof criteria.name === 'string'
  const variable = isNameSearch ? '$name: String!' : '$id: ID!'
  const field = isNameSearch
    ? `
    characters(filter: { name: $name }) {
      results {
        id
        name
        status
        species
        type
        gender
        image
        origin { name }
        location { name }
        episode { id name air_date }
      }
    }
  `
    : `
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin { name }
      location { name }
      episode { id name air_date }
    }
  `

  return `
    query (${ variable }) {
      ${ field }
    }
  `
}

export function useRickAndMortyAPI() {
  // Poderia usar o próprio nuxt para cachear as chamadas
  const fetchCharacters = async (page = 1): Promise<FetchCharactersResult> => {
    const result: FetchCharactersResult = {
      data: null,
      error: null,
      pending: true
    }

    try {
      const response = await $fetch<{
        data?: { characters?: { info: CharactersInfo, results: Character[] } }
      }>(GRAPHQL_ENDPOINT, {
        method: 'POST',
        body: {
          query: charactersQuery,
          variables: { page }
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })

      result.data = response?.data?.characters ?? null
    }
    catch (err) {
      result.error = err
    }
    finally {
      result.pending = false
    }

    return result
  }

  const fetchCharacterByNameOrId = async (criteria: Criteria): Promise<FetchCharacterByNameResult> => {
    const result: FetchCharacterByNameResult = {
      data: [],
      error: null,
      pending: true
    }

    try {
      const query = characterByNameOrId(criteria)
      const variables = criteria.name ? { name: criteria.name } : { id: criteria.id }

      const response = await $fetch<{
        data?: {
          characters?: { results?: Character[] }
          character?: Character
        }
      }>(GRAPHQL_ENDPOINT, {
        method: 'POST',
        body: {
          query,
          variables
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (criteria.name) {
        result.data = response.data?.characters?.results ?? []
      }
      else {
        const char = response.data?.character
        result.data = char ? [char] : []
      }
    }
    catch (err) {
      result.error = err
    }
    finally {
      result.pending = false
    }

    return result
  }

  return {
    fetchCharacters,
    fetchCharacterByNameOrId
  }
}
