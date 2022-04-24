import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import UiCat from './UiCat';

const AllCat = () => {
   const [cats, setCats] = useState([]);
   const userData = useSelector(state => state.userData);
   const loadCats = async () => {
      const response = await fetch("http://13.214.58.126:3001/cats");
      const resData = await response.json();
      if (resData.con) {
         setCats(resData.result);
      } else {
         console.log(resData);
      }
   }
   const apiCatDelete = async (id) => {
      const response = await fetch(`http://13.214.58.126:3001/cats/${id}`, {
         method: "DELETE",
         headers: {
            'content-type': "application/json",
            authorization: `Bearer ${userData.token}`
         }
      });
      const resData = await response.json();
      console.log(resData);
      loadCats();
   }
   useEffect(() => {
      loadCats();
   }, []);

   return (
      <div>
         <Link to="/admin/cats/add" className="btn btn-primary btn-sm mb-2">Add</Link>
         <div className="row">
            {cats.length > 0 && cats.map(cat => <UiCat key={cat._id} cat={cat} apiCatDelete={apiCatDelete} />)}
         </div>
      </div>
   )
}

export default AllCat