import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../shares/Loading';
import { getData, formPost } from '../../../utils/Api';

const AddPost = () => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [cat, setCat] = useState('');
   const [tag, setTag] = useState('');
   const [file, setFile] = useState('');
   const [cats, setCats] = useState([]);
   const [tags, setTags] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const userData = useSelector(state => state.userData);
   const navigate = useNavigate();


   const loadCats = async () => {
      const resData = await getData("/cats");
      if (resData.con) {
         setCats(resData.result);
         setCat(resData.result[0]._id);
      } else {
         console.log(resData);
      }
   }

   const loadTags = async () => {
      const resData = await getData("/tags");
      console.log(resData);
      setTags(resData.result);
      setTag(resData.result[0]._id);
   }

   useEffect(() => { loadCats(); loadTags() }, [])

   const apiAddPost = async () => {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('cat', cat);
      formData.append('tag', tag);
      formData.append('content', content);
      formData.append('file', file);
      const resData = await formPost("/posts", formData, userData.token);
      if (resData.con) {
         navigate('/admin/posts/all');
      } else {
         console.log(resData);
      }
      setIsLoading(false);
   }

   const onFileChange = e => {
      setFile(e.target.files[0]);
   }

   const submitPost = e => {
      e.preventDefault();
      setIsLoading(true);
      apiAddPost();
   }
   return (
      <div className="col-md-8 offset-md-2 bg-dark p-5">
         {isLoading && <Loading />}
         <h2 className="text-center text-white">Add New Post</h2>
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
                     {cats.length > 0 && cats.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
                  </select>
               </div>
               <div className="mb-3 col-md-6">
                  <label htmlFor="tagId" className="form-label text-white">Tag</label>
                  <select className="form-select" id="tagId" onChange={e => setTag(e.target.value)}>
                     {tags.length > 0 && tags.map(tag => <option key={tag._id} value={tag._id}>{tag.name}</option>)}
                  </select>
               </div>

               <div className="mb-3 col-md-6 col-md-6">
                  <label htmlFor="formFile" className="form-label">Image</label>
                  <input className="form-control" type="file" id="formFile" onChange={onFileChange} />
               </div>

               <div className="mb-3 col-md-6">
                  <label htmlFor="content" className="form-label text-white" >Content</label>
                  <textarea className="form-control" id="content" rows="3" defaultValue={content} onChange={e => setContent(e.target.value)}></textarea>
               </div>
               <div className="mb-3 col-md-6 d-flex justify-content-end justify-content-center mt-5">
                  <div>
                     <button type="reset" className="btn btn-outline-warning btn-sm me-1">cancle</button>
                     <button type="submit" className="btn btn-success btn-sm">Create</button>
                  </div>
               </div>
            </div>
         </form>
      </div>
   )
}

export default AddPost