import p1 from '../../statics/p1.jpg';
import p2 from '../../statics/p2.jpg';
import p3 from '../../statics/p3.jpg';
import p4 from '../../statics/p4.jpg';
import p5 from '../../statics/p5.jpg';
import SlideImg from './SlideImg';
import videoMp4 from '../../statics/video.mp4'
import {useSelector} from 'react-redux';

export default function Header() {
   const siteData = useSelector(state => state.siteData);
   return (
      <div className="row mt-3">
         <div className="col-md-8">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
               <div className="carousel-inner">
                  <SlideImg image={p1} active="active" alt="Slide 1" title={siteData.title2} desc={siteData.shortDesc} />
                  <SlideImg image={p2} active="" alt="Slide 1" title="Slide 1 title" desc="Some representative placeholder content for the first slide." />
                  <SlideImg image={p3} active="" alt="Slide 1" title="Slide 1 title" desc="Some representative placeholder content for the first slide." />
                  <SlideImg image={p4} active="" alt="Slide 1" title="Slide 1 title" desc="Some representative placeholder content for the first slide." />
                  <SlideImg image={p5} active="" alt="Slide 1" title="Slide 1 title" desc="Some representative placeholder content for the first slide." />
               </div>
            </div>
         </div>
         <div className="col-md-4">
            <video width="100%" controls>
               <source src={videoMp4}></source>
            </video>
            <h6 className="text-center"><strong>{siteData.title1}</strong></h6>
            <p className="para">{siteData.para1}</p>
         </div>
      </div>
   )
}
