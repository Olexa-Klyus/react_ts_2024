const baseURL = 'https://rickandmortyapi.com/api'

const episode = '/episode'
const characters = '/character'

const urls = {
    episode,
    characters: {
        byIds: (ids) => `${characters}/${ids}`
    }
}

export {
    baseURL,
    urls
}