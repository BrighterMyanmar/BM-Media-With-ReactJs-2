import { useSelector } from "react-redux"

export default function SlideImg({ image, active, alt, title, desc }) {
   return (
      <div className={"carousel-item " + active} data-bs-interval="5000">
         <img src={image} className="d-block w-100" height="450px" alt={alt} />
         <div className="carousel-caption d-none d-md-block">
            <h5>{title}</h5>
            <p>{desc}</p>
         </div>
      </div>
   )
}
