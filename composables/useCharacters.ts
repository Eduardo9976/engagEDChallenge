import type { Character, CharactersInfo, Criteria, FetchCharactersResult } from '#types'

const defaultInfo: CharactersInfo = { count: 0, pages: 0, next: 0, prev: 0 }

export default async function useCharacters() {
  const { fetchCharacters, fetchCharacterByNameOrId } = useRickAndMortyAPI()

  const settings = useState('use-settings', () => ({
    currentPage: 1,
    rowsPerPage: 20,
    info: defaultInfo,
    hasSearch: false,
    characters: [] as Character[]
  }))

  const loadCharacters = async (): Promise<void> => {
    settings.value.hasSearch = false

    const { data, error }: FetchCharactersResult = await fetchCharacters(settings.value.currentPage)

    if (error) {
      settings.value.characters = []
      settings.value.info = defaultInfo
    }

    settings.value.info = data?.info ?? defaultInfo
    settings.value.characters = data?.results ?? []
  }

  const characterByNameOrId = async (criteria: Criteria) => {
    settings.value.hasSearch = true

    const { data, error } = await fetchCharacterByNameOrId(criteria)

    if (error) {
      settings.value.characters = []
      settings.value.info = defaultInfo
    }

    settings.value.characters = data ?? []
  }

  const changePage = async (page?: number): Promise<void> => {
    if (page) {
      settings.value.currentPage = page
    }

    await loadCharacters()
  }

  if (settings.value.characters.length === 0) {
    await loadCharacters()
  }

  return {
    changePage,
    characterByNameOrId,
    characters: computed(() => settings.value.characters),
    hasSearch: computed(() => settings.value.hasSearch),
    info: computed(() => ({
      ...settings.value.info,
      currentPage: settings.value.currentPage,
      rowsPerPage: settings.value.rowsPerPage
    }))
  }
}
