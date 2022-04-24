import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TagUi = ({ tag, apiTagDelete }) => {
   return (
      <div className="col-md-4 mb-3">
         <div className="card">
            <div className="card-body">
               <div className="row">
                  <div className="col-md-6">
                     <img src={`http://13.214.58.126:3001/uploads/${tag.image}`} width="100%" height="50px" />
                  </div>
                  <div className="col-md-6">
                     <strong>{tag.name}</strong><br />
                     <Link to={`/admin/tags/edit/${tag._id}`} className="btn btn-warning btn-sm me-1">
                        <i className="fa fa-edit"></i>
                     </Link>
                     <button className="btn btn-danger btn-sm" onClick={() => apiTagDelete(tag._id)}>
                        <i className="fa fa-trash"></i>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default TagUi