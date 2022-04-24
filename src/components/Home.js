import React, { useEffect, useState } from 'react'
import Header from './shares/Header';
import HotNew from './shares/HotNew';
import p1 from '../statics/p1.jpg';
import p2 from '../statics/p2.jpg';
import p3 from '../statics/p3.jpg';
import p4 from '../statics/p4.jpg';
import p5 from '../statics/p5.jpg';
import sideads1 from '../statics/sideads.jpg';
import banner1 from '../statics/banner1.jpg';
import banner2 from '../statics/banner2.jpg';
import logoImg from '../statics/logo.png';
import HomeAffair from './shares/HomeAffair';
import SideNews from './shares/SideNews';
import SideVideoNews from './shares/SideVideoNews';

export default function Home() {
   const [hotnews, setHotNews] = useState([]);
   const [catposts, setCatPosts] = useState([]);
   const loadHotNews = async () => {
      const response = await fetch("http://13.214.58.126:3001/posts/bytag/6264c1c2d31b2d117e3c1867");
      const resData = await response.json();
      setHotNews(resData.result.splice(0, 6));
   }
   const loadPostByCat = async () => {
      const response = await fetch("http://13.214.58.126:3001/posts/bycat/626526c302e3e94e7b2f2ab3");
      const resData = await response.json();
      setCatPosts(resData.result.splice(0, 6));
   }
   useEffect(() => { loadHotNews(); loadPostByCat() }, []);
   return (
      <div className="container">
         <div className="row mt-3">
            <div className="col-md-2">
               <img src={logoImg} width="100px" />
            </div>
            <div className="col-md-5">
               <img src={banner1} />
            </div>
            <div className="col-md-5">
               <img src={banner2} />
            </div>
         </div>
         <Header />
         <div className="row">
            <div className="col-md-8">
               <div className="bg-dark p-2 d-flex justify-content-between">
                  <button className="btn btn-danger btn-sm rounded-0">Hot News</button>
                  <button className="btn btn-danger btn-sm rounded-0">Read More</button>
               </div>
               <div className="row">
                  {hotnews.length > 0 && hotnews.map(hn => <HotNew key={hn._id} post={hn} />)}
               </div>

               <div className="row mb-3">
                  <div className="col-md-6">
                     <img src={banner1} />
                  </div>
                  <div className="col-md-6">
                     <img src={banner2} />
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <img src={sideads1} width="100%" />
            </div>
         </div>

         <div className="row">
            <div className="col-md-8">
               <div className="mb-3 bg-dark p-2 d-flex justify-content-between">
                  <button className="btn btn-danger btn-sm rounded-0">ပြည်တွင်း</button>
                  <button className="btn btn-danger btn-sm rounded-0">Read More</button>
               </div>
               <div className="row">
                  {catposts.length > 0 && catposts.map(cp => <HomeAffair key={cp._id} post={cp} />)}
               </div>
            </div>
            <div className="col-md-4">
               <div className="mb-3 bg-dark p-2 d-flex justify-content-between">
                  <button className="btn btn-danger btn-sm rounded-0">Hot NEWS</button>
                  <button className="btn btn-danger btn-sm rounded-0">Read More</button>
               </div>
               <SideNews image={p1} />
               <SideNews image={p1} />
               <SideNews image={p1} />
               <div className="mt-3 bg-dark p-2 d-flex justify-content-between">
                  <button className="btn btn-danger btn-sm rounded-0">TV NEWS</button>
                  <button className="btn btn-danger btn-sm rounded-0">Read More</button>
               </div>
               <SideVideoNews />
            </div>
         </div>
      </div>
   )
}
