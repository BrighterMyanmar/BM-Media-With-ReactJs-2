import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../shares/Loading';

const AddTag = () => {
   const [name, setName] = useState('');
   const [file, setFile] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const userData = useSelector(state => state.userData);
   const navigate = useNavigate();

   const onFileChange = e => {
      setFile(e.target.files[0]);
   }

   const apiTagAdd = async () => {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", file);
      const response = await fetch("http://13.214.58.126:3001/tags", {
         method: "POST",
         body: formData,
         headers: {
            authorization: `Bearer ${userData.token}`
         }
      });
      const resData = await response.json()
      if (resData.con) {
         navigate('/admin/tags/all')
      } else {
         console.log(resData);
      }
      setIsLoading(false);
   }

   const submitCategory = e => {
      e.preventDefault();
      setIsLoading(true);
      apiTagAdd();
   }
   return (
      <div className="col-md-8 offset-md-2 bg-dark p-5">
         {isLoading && <Loading />}
         <h1 className="text-center text-white">Add New Tag</h1>
         <form onSubmit={submitCategory}>
            <div className="">
               <label htmlFor="name" className="form-label text-white">Name</label>
               <input type="text" className="form-control" id="name"
                  required
                  minLength={5}
                  value={name}
                  onChange={e => setName(e.target.value)}
               />
            </div>
            <div className="mb-5">
               <label htmlFor="formFile" className="form-label">Image</label>
               <input className="form-control" type="file" id="formFile" onChange={onFileChange} />
            </div>
            <div className="mb-3 d-flex justify-content-end">
               <button type="reset" className="btn btn-outline-warning btn-sm me-1">cancle</button>
               <button type="submit" className="btn btn-success btn-sm">Create</button>
            </div>
         </form>
      </div>
   )
}

export default AddTag