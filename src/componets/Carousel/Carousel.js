import './Carousel.css'

import { useEffect, useState } from 'react';
import Slide from './Slide/Slide';


export default function Carousel(props) {
  const categories = props.categories
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    // start slideshow
    const interval = setInterval(() => {
      setActiveIndex(i => i + 1);
    }, 3000)

    // clear slideshow
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (activeIndex >= categories.length) {
      setActiveIndex(i => 0)
    } else if (activeIndex < 0) {
      setActiveIndex(i => categories.length - 1)
    }
  }, [activeIndex]);

  function prevSlide() {
    setActiveIndex(i => i - 1)
  }
  function nextSlide() {
    setActiveIndex(i => i + 1)
  }


  return (
    <article className="carousel">
      {categories && categories.map((category, i) => <Slide key={category[0]} category={category} active={i===activeIndex} />)}

      <button onClick={prevSlide} className="carousel__prev carousel__button">
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <button onClick={nextSlide} className="carousel__next carousel__button">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

    </article >
  )
}
