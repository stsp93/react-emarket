import './Carousel.css'

import { useEffect, useState } from 'react';
import Slide from './Slide/Slide';
import { getAllCategories } from '../../api/data';


export default function Carousel() {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    
    // Fetch all categories 
    getAllCategories().then((res) => {
      setCategories(() => {
        // Set random category to be shown
        setActiveIndex(Math.floor(Math.random() * (Object.entries(res).length + 1)))
        return Object.entries(res)
      });
    }).catch((error) => console.log(error))

    // start slideshow
    const interval = setInterval(() => {
      setActiveIndex(i => i + 1);
    }, 5000)

    // clear slideshow
    return () => clearInterval(interval)
  }, []);

  useEffect(() => {
    if (activeIndex >= categories.length) {
      setActiveIndex(i => 0)
    } else if (activeIndex < 0) {
      setActiveIndex(i => categories.length - 1)
    }
  }, [activeIndex,categories]);

  function prevSlide() {
    setActiveIndex(i => i - 1)
  }
  function nextSlide() {
    setActiveIndex(i => i + 1)
  }


  return (
    <article className="carousel">
      {categories && categories.map((category, i) => <Slide key={category[0]} category={category} active={i === activeIndex} />)}

      <button onClick={prevSlide} className="carousel__prev carousel__button">
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <button onClick={nextSlide} className="carousel__next carousel__button">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

    </article >
  )
}
