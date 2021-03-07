import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeFromList, addToList } from '../../redux/actions/comics'
import { selectors } from '../../redux/selectors/comics'

import Banner from '../../components/banner'
import Button from '../../components/button'
import Card from '../../components/card'
import Section from '../../components/section'
import Form from '../../components/form'
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
          title='Sua lista'
        >
          {comics.map((comic, index) => (
            <div key={index} style={{ paddingTop: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card backgroundColor='white'>

                  <h3>Título: {comic.comicDetails.title}</h3>
                  <h3>Na sua lista: {comic.numberOfComics}</h3>
                  <Button
                    text='Remover da lista'
                    onClick={() => removeComicFromList(comic.comicDetails)}
                  />
                  <Button
                    text='Adicionar à lista'
                    onClick={() => addComicToList(comic.comicDetails)}
                  />
                </Card>
              </div>
            </div>
          ))}
        </Section>
        <Section
          customStyles={{ backgroundColor: '#EEEEEE' }}
          title='Facilite! Envie sua lista para o email desejado'
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Form comics={comics} />
          </div>
        </Section>
      </div>
    )

  const renderEmptyList = () => (
    <Banner
      image={images.error}
      backgroundImage={images.errorBackground}
      text='Você ainda não possui nenhum quadrinho em sua lista.
         Adicione quadrinhos na página principal'
    />
  )

  return comics.length > 0 ? renderContent() : renderEmptyList()
}

export default List
