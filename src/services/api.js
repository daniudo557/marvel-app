import axios from 'axios'

const apiKey = `apikey=${process.env.REACT_APP_API_KEY}`
const hash = `hash=${process.env.REACT_APP_HASH}`
const secret = `ts=1&${apiKey}&${hash}`

const baseURL = 'https://gateway.marvel.com/v1/public'

const api = axios.create({ baseURL })

const API = {}

API.getComics = () => api.get(`/comics?${secret}`)
API.getComicsById = (comicId) => api.get(`/comics/${comicId}?${secret}`)
API.getStoriesByComicId = (comicId) =>
  api.get(`/comics/${comicId}/stories?${secret}`)
API.getCreatorsByComicId = (comicId) =>
  api.get(`/comics/${comicId}/creators?${secret}`)

API.getCharacters = () => api.get(`/characters?${secret}`)
API.getCharacters2 = () => api.get(`/comics/1308/characters?${secret}`)

export default API
