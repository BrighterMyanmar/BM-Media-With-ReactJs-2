import React from 'react'

export default function HomeAffair({ post }) {
   return (
      <div className="col-md-4 mb-3">
         <div className="card">
            <img src={`http://13.214.58.126:3001/uploads/${post.image}`} className="card-img-top" alt="p1" />
            <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" className="btn btn-info btn-sm float-end">
                  <i className="fa fa-eye text-white"></i>
                  <strong className="text-white px-1">Detail...</strong>
               </a>
            </div>
         </div>
      </div>
   )
}
