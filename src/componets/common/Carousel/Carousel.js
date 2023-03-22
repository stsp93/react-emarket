import './Carousel.css'

import { useEffect, useState } from 'react';
import Slide from './Slide/Slide';
import { getAllCategories } from '../../../services/api/data';
import Dot from './Dot/Dot';


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

  function indexUpdate(i) {
    setActiveIndex(i)
  }

  return (
    <article className="carousel">
      {categories && categories.map((category, i) => <Slide key={category[0]} category={category} active={i === activeIndex} />)}
      <ul className='carousel__dots'>
      {categories && categories.map((category, i) => <Dot key={category[0]} indexHandle={{indexUpdate, i}} active={i === activeIndex} />)}
      </ul>

    </article >
  )
}
