import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import TagUi from './TagUi';

const AllTag = () => {
   const [tags, setTags] = useState([]);
   const userData = useSelector(state => state.userData);
   const loadTags = async () => {
      const response = await fetch("http://13.214.58.126:3001/tags");
      const resData = await response.json();
      console.log(resData);
      setTags(resData.result);
   }
   const apiTagDelete = async (id) => {
      const response = await fetch(`http://13.214.58.126:3001/tags/${id}`, {
         method: "DELETE",
         headers: {
            'content-type': "application/json",
            authorization: `Bearer ${userData.token}`
         }
      });
      const resData = await response.json();
      console.log(resData);
      loadTags();
   }
   useEffect(() => {
      loadTags();
   }, [])
   return (
      <div>
         <Link to="/admin/tags/add" className="btn btn-primary btn-sm mb-2">Add</Link>
         <div className="row">
            {
               tags.map(tag => <TagUi key={tag._id} tag={tag} apiTagDelete={apiTagDelete} />)
            }
         </div>
      </div>
   )
}

export default AllTag