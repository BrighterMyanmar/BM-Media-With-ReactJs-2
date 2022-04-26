import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import PostUi from './PostUi'
import { getData, deleteData } from '../../../utils/Api';

const AllPost = () => {
   const [page, setPage] = useState(1);
   const [posts, setPosts] = useState([]);
   const userData = useSelector(state => state.userData);

   const loadPosts = async () => {
      const resData = await getData(`/posts/paginate/${page}`);
      setPosts(resData.result);
   }

   useEffect(() => { loadPosts() }, [page])


   const apiPostDelete = async (id) => {
      const resData = await deleteData(`/posts/${id}`, userData.token);
      loadPosts();
   }
   const incresetPage = () => setPage(prev => prev + 1);
   const decresetPage = () => {
      if (page >= 2) {
         setPage(prev => prev - 1)
      }
   };
   return (
      <>
         <div>
            <div className="d-flex justify-content-between">
               <div>
                  <Link to="/admin/posts/add" className="btn btn-primary btn-sm mb-2">Add</Link>
               </div>
               <nav aria-label="Page navigation example">
                  <ul class="pagination pagination-sm">
                     <button className="page-item page-link" onClick={decresetPage}>prev</button>
                     <button className="page-item page-link" onClick={incresetPage}>next</button>
                  </ul>
               </nav>
            </div>
            <div className="row">
               {posts.length > 0 && posts.map(post => <PostUi key={post._id} post={post} apiPostDelete={apiPostDelete} />)}
            </div>
            <div className="d-flex justify-content-center">
               <nav aria-label="Page navigation example">
                  <ul class="pagination pagination-sm">
                     <button className="page-item page-link" onClick={decresetPage}>prev</button>
                     <button className="page-item page-link" onClick={incresetPage}>next</button>
                  </ul>
               </nav>
            </div>
         </div>
      </>
   )
}

export default AllPost