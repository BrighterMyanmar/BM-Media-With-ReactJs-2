import React from 'react'
import { Link } from 'react-router-dom'

const FallBackRoute = () => {
   return (
      <div className="my-5">
         <h3 className="text-center"> No Route Found </h3>
         <h4 className="text-center"><Link to="/">Go back Home</Link></h4>
      </div>
   )
}

export default FallBackRoute