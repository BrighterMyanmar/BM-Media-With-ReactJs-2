import React from 'react'
import { Link } from 'react-router-dom'

const PostUi = ({ post, apiPostDelete }) => {
   return (
      <div className="col-md-4 mb-3">
         <div className="card">

            <div className="card-body">
               <div className="row">
                  <div className="col-md-6">
                     <img src={`http://13.214.58.126:3001/uploads/${post.image}`} width="100%" height="100px" alt={post.image} />
                  </div>
                  <div className="col-md-6">
                     <h5 className="card-title">{post.title}</h5>
                     <p className="card-text">{post.content.substring(0, 50)}</p>
                     <div>
                        <Link to={`/admin/posts/edit/${post._id}`} className="btn btn-warning btn-sm me-1"><i className="fa fa-edit"></i></Link>
                        <button className="btn btn-danger btn-sm" onClick={() => apiPostDelete(post._id)}><i className="fa fa-trash"></i></button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PostUi