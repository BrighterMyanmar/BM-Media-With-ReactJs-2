import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../shares/Loading';
import { getData, patchData } from '../../../utils/Api';

const EditPost = () => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [cat, setCat] = useState('');
   const [tag, setTag] = useState('');
   const [cats, setCats] = useState([]);
   const [tags, setTags] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const { id } = useParams();

   const userData = useSelector(state => state.userData);
   const navigate = useNavigate();

   const loadSingleCat = async () => {
      const resData = await getData(`/posts/${id}`);
      const curPost = resData.result;
      setTitle(curPost.title);
      setContent(curPost.content);
      setTag(curPost.tag);
      setCat(curPost.cat);
   }

   const loadCats = async () => {
      const resData = await getData("/cats");
      if (resData.con) {
         setCats(resData.result);
      } else {
         console.log(resData);
      }
   }

   const loadTags = async () => {
      const resData = await getData("/tags");
      console.log(resData);
      setTags(resData.result);
   }


   useEffect(() => { loadSingleCat(); loadCats(); loadTags() }, [])

   const apiPatchPost = async () => {
      const updateData = { title, cat, tag, content };
      const resData = await patchData(`http://13.214.58.126:3001/posts/${id}`, updateData, userData.token);
      if (resData.con) {
         navigate('/admin/posts/all');
      } else {
         console.log(resData);
      }
      setIsLoading(false);
   }

   const submitPost = e => {
      e.preventDefault();
      setIsLoading(true);
      apiPatchPost();
   }
   return (
      <div className="col-md-8 offset-md-2 bg-dark p-5">
         {isLoading && <Loading />}
         <h2 className="text-center text-white">Edit Post</h2>
         <form onSubmit={submitPost}>
            <div className="row">
               <div className="mb-3 col-md-6">
                  <label htmlFor="title" className="form-label text-white">Title</label>
                  <input type="text" className="form-control" id="title"
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                     required
                  />
               </div>
               <div className="mb-3 col-md-6">
                  <label htmlFor="categoryId" className="form-label text-white">Category</label>
                  <select className="form-select" id="categoryId" onChange={e => setCat(e.target.value)}>
                     {cats.length > 0 && cats.map(caty => <option key={caty._id} value={caty._id} selected={caty._id === cat}>{caty.name}</option>)}
                  </select>
               </div>
               <div className="mb-3 col-md-6">
                  <label htmlFor="tagId" className="form-label text-white">Tag</label>
                  <select className="form-select" id="tagId" onChange={e => setTag(e.target.value)}>
                     {tags.length > 0 && tags.map(tagy => <option key={tagy._id} value={tagy._id} selected={tagy._id === tag}>{tagy.name}</option>)}
                  </select>
               </div>

               <div className="mb-3 col-md-6">
                  <label htmlFor="content" className="form-label text-white" >Content</label>
                  <textarea className="form-control" id="content" rows="3" defaultValue={content} onChange={e => setContent(e.target.value)}></textarea>
               </div>
               <div className="mb-3 col-md-6 d-flex justify-content-end justify-content-center mt-5">
                  <div>
                     <button type="reset" className="btn btn-outline-warning btn-sm me-1">cancle</button>
                     <button type="submit" className="btn btn-success btn-sm">Update</button>
                  </div>
               </div>
            </div>
         </form>
      </div>
   )
}

export default EditPost