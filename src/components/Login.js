import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./shares/Loading";
import { addUser, removeUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";


export default function Login() {
   const [phone, setPhone] = useState('09600600600');
   const [password, setPassword] = useState('123123123');
   const [isLoading, setIsLoading] = useState(false);
   const userData = useSelector(state => state.userData);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const apiLogin = async user => {
      const response = await fetch("http://13.214.58.126:3001/users", {
         method: 'POST',
         body: JSON.stringify(user),
         headers: { "content-type": "application/json" }
      });
      const resData = await response.json();
      if (resData.con) {
         setIsLoading(false);
         dispatch(addUser(resData.result));
         navigate('/admin');
      } else {
         console.log(resData);
      }
   }

   const loginUser = e => {
      e.preventDefault();
      setIsLoading(true);
      let user = { phone, password };
      apiLogin(user);
   }

   return (
      <div className="container my-5">
         {isLoading && <Loading />}
         <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
            <h1 className="text-white text-center">Login To Post</h1>
            <form onSubmit={loginUser}>
               <div className="mb-3">
                  <label htmlFor="phone" className="form-label text-white">Phone</label>
                  <input type="tel"
                     value={phone}
                     onChange={e => setPhone(e.target.value)}
                     minLength={8}
                     maxLength={11}
                     className="form-control rounded-0 bg-dark text-white" id="phone" />
               </div>
               <div className="mb-3">
                  <label htmlFor="password" className="form-label text-white">Password</label>
                  <input type="password"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     minLength={8}
                     className="form-control rounded-0  bg-dark text-white" id="password" />
               </div>
               <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberCheck" />
                  <label className="form-check-label text-white" htmlFor="rememberCheck">Remember Me</label>
               </div>
               <div className="d-flex justify-content-between mt-4">
                  <Link to="/register">ot a member yet! Register herer</Link>
                  <div>
                     <button type="reset" className="btn btn-outline-warning btn-sm mx-2 text-white">Cancle</button>
                     <button type="submit" className="btn btn-success btn-sm">Login</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}
