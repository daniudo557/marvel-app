import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeFromList, addToList } from '../../redux/actions/comics'
import { selectors } from '../../redux/selectors/comics'

import Banner from '../../components/banner'
import Button from '../../components/button'
import Section from '../../components/section'
import { images } from '../../themes'

const List = () => {
  const comics = useSelector(selectors.getComics)

  const dispatch = useDispatch()

  const removeComicFromList = (comic) => dispatch(removeFromList(comic))
  const addComicToList = (comic) => dispatch(addToList(comic))

  const renderContent = () =>
    (
      <div className=''>
        <Banner
          image={images.list}
          text='Consulte sua lista de quadrinhos'
        />
        <Section
          customStyles={{ backgroundColor: '#F5F5F5' }}
          title='Consulte sua lista de quadrinhos'
        >
          {comics.map((comic, index) => (
            <div key={index} style={{ padding: 32 }}>
              <h1>Título: {comic.comicDetails.title}</h1>
              <h1>Na sua lista: {comic.numberOfComics}</h1>
              <Button
                text='Remover da lista'
                onClick={() => removeComicFromList(comic.comicDetails)}
              />
              <Button
                text='Adicionar à lista'
                onClick={() => addComicToList(comic.comicDetails)}
              />
            </div>
          ))}
        </Section>
      </div>
    )

  const renderEmptyList = () => (
    <Banner
      image={images.error}
      backgroundImage={images.errorBackground}
      text='Você ainda não possui nenhum quadrinho em sua lista
         Adicione quadrinhos na página principal'
    />
  )

  return comics.length > 0 ? renderContent() : renderEmptyList()
}

export default List
