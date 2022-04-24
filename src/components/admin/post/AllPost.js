import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import PostUi from './PostUi'

const AllPost = () => {
   const [posts, setPosts] = useState([]);
   const userData = useSelector(state => state.userData);

   const loadPosts = async () => {
      const response = await fetch("http://13.214.58.126:3001/posts/paginate/1");
      const resData = await response.json();
      setPosts(resData.result);
   }

   useEffect(() => { loadPosts() }, [])

   const apiPostDelete = async (id) => {
      const response = await fetch(`http://13.214.58.126:3001/posts/${id}`, {
         method: "DELETE",
         headers: {
            'content-type': "application/json",
            authorization: `Bearer ${userData.token}`
         }
      });
      const resData = await response.json();
      loadPosts();
   }
   return (
      <>
         <div>
            <Link to="/admin/posts/add" className="btn btn-primary btn-sm mb-2">Add</Link>
            <div className="row">
               {posts.length > 0 && posts.map(post => <PostUi key={post._id} post={post} apiPostDelete={apiPostDelete} />)}
            </div>
         </div>
      </>
   )
}

export default AllPost