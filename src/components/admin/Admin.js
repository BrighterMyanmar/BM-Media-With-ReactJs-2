import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
   return (
      <div className="container fixHeight my-2">
         <div className="row">
            <div className="col-md-3">
               <ul className="list-group">
                  <Link to="/admin/cats/all" className="list-group-item rounded-0">Categories</Link>
                  <Link to="/admin/tags/all" className="list-group-item rounded-0">Tags</Link>
                  <Link to="/admin/posts/all" className="list-group-item rounded-0">Posts</Link>
               </ul>
            </div>
            <div className="col-md-9">
               <Outlet />
            </div>
         </div>
      </div>
   )
}

export default Admin