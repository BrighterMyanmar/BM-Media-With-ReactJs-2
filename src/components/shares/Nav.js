import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../../statics/logo.png';
import { removeUser } from '../../redux/actions';

export default function () {
   const userData = useSelector(state => state.userData);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const logout = () => {
      dispatch(removeUser(null));
      navigate('/login');
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
                     <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">ပြည်တွင်း</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link text-white" href="#">နိုင်ငံတကာ</a>
                     </li>
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
