import './FormImages.css'

export default function FormImages({ images, deleteImage }) {
  return (
    <ul className="form-images">
      {images.length ?
        images.map((img, i) =>
          <li key={img} className='form-images__wrapper'>
            <button onClick={(e) => {
              e.preventDefault()
              deleteImage(img);
            }
            }
              className="form-image__delete"><i className="fa-regular fa-circle-xmark"></i></button>
            <img className="form-image" src={img} alt={img} />
          </li>) :
        <li>No images ...</li>}
    </ul>
  )
}
