import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../shares/Loading';
import { patchData, getData } from '../../../utils/Api';

const EditCat = () => {
   const [name, setName] = useState('');
   const [file, setFile] = useState('');
   const userData = useSelector(state => state.userData);
   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();
   const { id } = useParams();

   const apiCategoryUpdate = async () => {
      const resData = await patchData(`/cats/${id}`, { name: name }, userData.token);
      if (resData.con) {
         navigate('/admin/cats/all')
      } else {
         console.log(resData);
      }
      setIsLoading(false);
   }
   const loadCategory = async () => {
      const resData = await getData(`/cats/${id}`);
      setName(resData.result.name);
      setIsLoading(false);
   }

   useEffect(() => {
      setIsLoading(true)
      loadCategory();
   }, [])


   const submitCategory = e => {
      e.preventDefault();
      setIsLoading(true);
      apiCategoryUpdate();
   }
   return (
      <div className="col-md-8 offset-md-2 bg-dark p-5">
         {isLoading && <Loading />}
         <h1 className="text-center text-white">Edit Category</h1>
         <form onSubmit={submitCategory}>
            <div className="mb-3">
               <label htmlFor="name" className="form-label text-white">Name</label>
               <input type="text" className="form-control" id="name"
                  required
                  minLength={5}
                  value={name}
                  onChange={e => setName(e.target.value)}
               />
            </div>
            <div className="mb-3 d-flex justify-content-end">
               <button type="reset" className="btn btn-outline-warning btn-sm me-1">cancle</button>
               <button type="submit" className="btn btn-success btn-sm">Update</button>
            </div>
         </form>
      </div>
   )
}

export default EditCat