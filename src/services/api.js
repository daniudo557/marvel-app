import axios from 'axios'

const apiKey = `apikey=${process.env.REACT_APP_API_KEY}`
const hash = `hash=${process.env.REACT_APP_HASH}`
const secret = `ts=1&${apiKey}&${hash}`

const baseURL = 'https://gateway.marvel.com/v1/public'
const emailURL = 'https://daniudo557.top'

const api = axios.create({ baseURL })
const emailApi = axios.create({ baseURL: emailURL })

const API = {}

API.getComics = () => api.get(`/comics?limit=100&${secret}`)
API.getComicsById = (comicId) => api.get(`/comics/${comicId}?${secret}`)
API.getCreatorsByComicId = (comicId) =>
  api.get(`/comics/${comicId}/creators?${secret}`)
API.sendEmail = data => emailApi.post('/send', data)

API.getCharacters = () => api.get(`/characters?limit=100&${secret}`)
API.getCharactersById = (characterId) =>
  api.get(`/characters/${characterId}?${secret}`)

export default API
