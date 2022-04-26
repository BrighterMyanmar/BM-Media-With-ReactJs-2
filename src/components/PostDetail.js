import React, { useEffect, useState } from 'react'
import Header from './shares/Header';
import HotNew from './shares/HotNew';
import p1 from '../statics/p1.jpg';
import sideads1 from '../statics/sideads.jpg';
import banner1 from '../statics/banner1.jpg';
import banner2 from '../statics/banner2.jpg';
import logoImg from '../statics/logo.png';
import HomeAffair from './shares/HomeAffair';
import SideNews from './shares/SideNews';
import SideVideoNews from './shares/SideVideoNews';
import SlideImg from './shares/SlideImg';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
   const { id } = useParams();
   const [hotnews, setHotNews] = useState([]);
   const [post, setPost] = useState({});
   const [postDate, setPostDate] = useState('');
   const loadHotNews = async () => {
      const response = await fetch("http://13.214.58.126:3001/posts/bytag/6264c1c2d31b2d117e3c1867");
      const resData = await response.json();
      setHotNews(resData.result.splice(0, 6));
   }
   const loadSinglePost = async () => {
      const response = await fetch(`http://13.214.58.126:3001/posts/${id}`);
      const resData = await response.json();
      setPost(resData.result);
      setPostDate(resData.result.created.split("T")[0])
   }
   useEffect(() => { loadHotNews(); loadSinglePost() }, []);
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
         <div className="row my-3">
            <div className="col-md-8 hotnews">
               <div className="mb-3 bg-dark p-2">
                  <h6 className="text-white text-center">{post.title}</h6>
               </div>
               <img src={p1} width="100%" height="450px" />
               <strong className="mt-2">ရက်စွဲ - {postDate}</strong>
               <p>{post.content}</p>
            </div>
            <div className="col-md-4">
               <div className="mb-3 bg-dark p-2 d-flex justify-content-between">
                  <button className="btn btn-danger btn-sm rounded-0">Hot NEWS</button>
                  <button className="btn btn-danger btn-sm rounded-0">Read More</button>
               </div>
               {hotnews.length > 0 && hotnews.map(hn => <SideNews key={hn._id} post={hn} wordcount={100} />)}
            </div>
         </div>

      </div>
   )
}
