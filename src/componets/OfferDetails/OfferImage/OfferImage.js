
import './OfferImage.css'

export default function OfferImage({img, active}) {

    const hidden = active ? {} : {display: 'none'}

  return (
    <img src={img} style={hidden} className="details-image skeleton" alt={img} />
  )
}
