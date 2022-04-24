import logoImg from '../../statics/logo.png';

export default function Footer() {
   return (
      <div className="container-fluid bg-dark">
         <div className="container p-5">
            <div className="row">
               <div className="col-md-4">
                  <ul className="list-group">
                     <li className="list-group-item border-info bg-dark rounded-0">
                        <i className="fa fa-user text-warning px-2"></i>
                        <a href="#" className="text-white px-2">About Us</a>
                     </li>
                     <li className="list-group-item border-info bg-dark rounded-0">
                        <i className="fa fa-envelope text-warning px-2"></i>
                        <a href="#" className="text-white px-2">brightermyanmar@gmail.com</a>
                     </li>
                     <li className="list-group-item border-info bg-dark rounded-0">
                        <i className="fa-brands fa-google text-warning px-2"></i>
                        <a href="#" className="text-white px-2">Google Community</a>
                     </li>
                     <li className="list-group-item border-info bg-dark rounded-0">
                        <i className="fa-brands fa-facebook text-warning px-2"></i>
                        <a href="#" className="text-white px-2">FaceBook Page</a>
                     </li>
                     <li className="list-group-item border-info bg-dark rounded-0">
                        <i className="fa-brands fa-youtube text-warning px-2"></i>
                        <a href="#" className="text-white px-2">YouTube Channel</a>
                     </li>
                  </ul>
               </div>
               <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                  <button className="btn btn-success btn-sm">Download Android App</button><br />
                  <button className="btn btn-warning btn-sm text-white">Download iOS App &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                  <h4 className="text-white mt-3">Our Sponspor</h4>
                  <img src={logoImg} width="50px" />
               </div>
               <div className="col-md-4">
                  <h3 className="text-center text-white">Contact Us</h3>
                  <form>
                     <div className="mb-1">
                        <input type="text" className="form-control bg-dark text-white rounded-0" id="name" placeholder="Name" />
                     </div>
                     <div className="mb-1">
                        <input type="email" className="form-control bg-dark text-white rounded-0" id="email" placeholder="Emial" />
                     </div>
                     <div className="mb-1">
                        <textarea className="form-control  bg-dark text-white rounded-0" id="content" rows="3"></textarea>
                     </div>
                     <button type="submit" className="btn btn-warning text-white float-end btn-sm">Submit</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}
