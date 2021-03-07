import React from 'react'

import { useSelector } from 'react-redux'
import { selectors } from '../../redux/selectors/comics'

import Banner from '../../components/banner'
import Section from '../../components/section'
import { images } from '../../themes'

const List = () => {
  const comics = useSelector(selectors.getComics)

  return (
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
            <h1>Comic title: {comic.comicDetails.title}</h1>
            <h1>Number of comics: {comic.numberOfComics}</h1>
          </div>
        ))}
      </Section>
    </div>
  )
}

export default List
