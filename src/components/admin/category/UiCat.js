import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UiCat = ({ cat, apiCatDelete }) => {
   return (
      <div className="col-md-3 mb-3">
         <div className="card">
            <div className="card-body">
               <div className="row">
                  <div className="col-md-6">
                     <img src={`http://13.214.58.126:3001/uploads/${cat.image}`} width="100%" height="50px" />
                  </div>
                  <div className="col-md-6">
                     <h5>{cat.name}</h5>
                     <Link to={`/admin/cats/edit/${cat._id}`} className="btn btn-warning btn-sm me-1">
                        <i className="fa fa-edit"></i>
                     </Link>
                     <button className="btn btn-danger btn-sm" onClick={() => apiCatDelete(cat._id)}>
                        <i className="fa fa-trash"></i>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default UiCat