export type Character = {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  origin?: { name: string }
  location?: { name: string }
  episode?: { id: string, name: string, air_date: string }[]
}

export type CharactersInfo = {
  count: number
  pages: number
  next: number
  prev: number
}

export type FetchCharactersResult = {
  data: {
    info: CharactersInfo
    results: Character[]
  } | null
  error: unknown
  pending: boolean
}

export type FetchCharacterByNameResult = {
  data: Character[]
  error: unknown
  pending: boolean
}

export type Criteria = {
  name?: string
  id?: string | number
}
