import videoMp4 from '../../statics/video.mp4'
export default function SideVideoNews({ image }) {
   return (
      <div className="">
         <div className="row">
            <video width="100%" controls>
               <source src={videoMp4}></source>
            </video>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
      </div>
   )
}
