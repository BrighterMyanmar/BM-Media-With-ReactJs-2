import { Link } from "react-router-dom";

export default function SideNews({ post, wordcount }) {
   return (
      <div className="my-2">
         <div className="row">
            <div className="col-md-6">
               <img src={`http://13.214.58.126:3001/uploads/${post.image}`} className="card-img-top" alt="p1" />
            </div>
            <div className="col-md-6">
               <h3 className="titlefontsize">{post.title}</h3>
               <p className="card-text parafontsize">
                  <Link to={`/postdetail/${post._id}`}>
                     {post.content.substring(0, wordcount)}
                  </Link>
               </p>
            </div>
         </div>
      </div>
   )
}
