import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./shares/Loading";
import { postData } from "../utils/Api";

export default function Register() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [password, setPassword] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();

   const apiRegister = async user => {
      const resData = await fetch("/register", user, "");
      if (resData.con) {
         navigate('/login');
      } else {
         console.log(resData);
      }
      setIsLoading(false);
   }
   const loginUser = e => {
      e.preventDefault();
      setIsLoading(true);
      let user = {
         name, email, phone, password
      }
      apiRegister(user);
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
   }
   return (
      <div className="container my-5">
         {isLoading && <Loading />}
         <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
            <h1 className="text-white text-center">Register To Be A Member</h1>
            <form onSubmit={loginUser}>
               <div className="input-group mt-5 my-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
                  <input type="text" className="form-control"
                     value={name}
                     onChange={e => setName(e.target.value)}
                     minLength={2}
                     required
                     placeholder="name" />
               </div>
               <div className="input-group mt-4 mb-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                  <input type="email" className="form-control"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     required
                     placeholder="Email" />
               </div>
               <div className="input-group mt-4 mb-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa fa-phone"></i></span>
                  <input type="tel" className="form-control"
                     value={phone}
                     onChange={e => setPhone(e.target.value)}
                     minLength={8}
                     maxLength={11}
                     required
                     placeholder="phone" />
               </div>
               <div className="input-group mt-4 mb-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa fa-lock"></i></span>
                  <input type="password" className="form-control"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     minLength={8}
                     required
                     placeholder="password" />
               </div>
               <div className="d-flex justify-content-between mt-4">
                  <Link to="/login">Already member! login here</Link>
                  <div>
                     <button type="reset" className="btn btn-outline-warning btn-sm mx-2 text-white">Cancle</button>
                     <button type="submit" className="btn btn-success btn-sm">Register</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}
