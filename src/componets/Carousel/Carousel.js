import './Carousel.css'

import { useEffect, useState } from 'react';
import Slide from './Slide/Slide';


export default function Carousel() {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Fetch all categories
    (async () => {
      const res = await fetch('http://localhost:3030/items/categories');
      const data = await res.json();
      setCategories(cat => Object.entries(data));
    })()

    // start slideshow
    const interval = setInterval(() => {
      setActiveIndex(i => i + 1);
    }, 2000)

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
      {categories.map((category, i) => <Slide key={category[0]} category={category} active={i===activeIndex} ></Slide>)}

      <button onClick={prevSlide} className="carousel__prev carousel__button">
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <button onClick={nextSlide} className="carousel__next carousel__button">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

    </article >
  )
}
