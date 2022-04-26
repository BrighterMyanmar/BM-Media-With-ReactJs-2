import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import UiCat from './UiCat';
import { getData, deleteData } from '../../../utils/Api';

const AllCat = () => {
   const [cats, setCats] = useState([]);
   const userData = useSelector(state => state.userData);
   const loadCats = async () => {
      const resData = await getData("/cats");
      if (resData.con) {
         setCats(resData.result);
      } else {
         console.log(resData);
      }
   }
   const apiCatDelete = async (id) => {
      const resData = await deleteData(`/cats/${id}`, userData.token);
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