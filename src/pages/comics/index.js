import React, { useState, useEffect } from 'react'

import API from '../../services/api'

import Banner from '../../components/banner'

const Comics = (props) => {
  const { params } = props.match
  console.log(params)

  const [comicsResponse, setComicsResponse] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    API.getComicsById(params.id).then(({ data }) => {
      setComicsResponse(data.data.results)
      setLoading(false)
      setError(false)
    }).catch(
      setError(true)
    )
  }, [])

  console.log(comicsResponse)
  return (
    <>
      <Banner />
      {!isLoading && isError
        ? <h1>Nao foi possível encontrar os dados do quadrinho</h1>
        : <h1>Deu certo</h1>}
    </>
  )
}

export default Comics
