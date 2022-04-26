import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../../statics/logo.png';
import { removeUser, setPage } from '../../redux/actions';

export default function () {
   const [cats, setCats] = useState([]);
   const userData = useSelector(state => state.userData);
   const pageSetter = useSelector(state => state.pageSetter);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const loadCats = async () => {
      const response = await fetch("http://13.214.58.126:3001/cats");
      const resData = await response.json();
      if (resData.con) {
         setCats(resData.result);
      } else {
         console.log(resData);
      }
   }
   useEffect(() => loadCats, [])

   const logout = () => {
      dispatch(removeUser(null));
      navigate('/login');
   }
   const changePage = (type, id) => {
      dispatch(setPage({ type, id }));
      navigate('/catpage');
   }
   return (
      <div className="contaner-fluid bg-dark">
         <nav className="container navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
               <img src={logoImg} alt="bm logo" width="30" height="30" />
               <Link to="/" className="navbar-brand text-white ms-2">BM Media</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     {cats.length > 0 && cats.map(cat => <li className="nav-item" key={cat._id}>
                        <a className="nav-link active text-white" style={{cursor:"pointer"}} onClick={() => changePage("bycat", cat._id)}>{cat.name}</a>
                     </li>)}
                     {userData && <li className="nav-item">
                        <Link to="/admin" className="nav-link text-white">Admin Panel</Link>
                     </li>}
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <i className="fa fa-user"></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                           {!userData && <li>
                              <Link to="/login" className="dropdown-item">Login</Link>
                           </li>}
                           {!userData && <li>
                              <Link to="/register" className="dropdown-item">Register</Link>
                           </li>}
                           {userData && <li><a className="dropdown-item" onClick={logout}>Logout</a></li>}
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   )
}
