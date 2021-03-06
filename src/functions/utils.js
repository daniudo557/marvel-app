import { useState, useEffect } from 'react'
import { breakpoints } from '../themes'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize () {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export const getBreakpoints = (width) => {
  const isDesktop = width > breakpoints.md
  const isTablet = width > breakpoints.sm && width <= breakpoints.md
  const isMobile = width <= breakpoints.sm

  return { isDesktop, isTablet, isMobile }
}

export const getComicImage = (comic) =>
  comic?.thumbnail?.path + '.' + comic?.thumbnail?.extension

export const getComicOnList = (comicsArray, comicId) => (
  comicsArray
    .find(comic => comic.comicDetails.id === comicId)
)

export const getNumberOnList = (comicsArray, comicId) => {
  const comicObject = getComicOnList(comicsArray, comicId)
  const isComicOnList = !!comicObject

  if (!isComicOnList) return 0

  return comicObject.numberOfComics
}
