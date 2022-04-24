import React from 'react'


export default function HotNew({ post }) {
   return (
      <div className="col-md-6 mb-2">
         <div className="card">
            <div className="card-body">
               <div className="row">
                  <div className="col-md-6">
                     <img src={`http://13.214.58.126:3001/uploads/${post.image}`} className="card-img-top" alt="p1" />
                  </div>
                  <div className="col-md-6">
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
