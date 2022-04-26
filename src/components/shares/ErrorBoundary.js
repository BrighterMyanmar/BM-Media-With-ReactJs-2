import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
   constructor(props) {
      super(props)

      this.state = {
         hasError: false
      }
   }

   static getDerivedStateFromError(error) {
      return { hasError: true }
   }
   componentDidCatch(error, errinfo) {
      console.log("Error is ", error);
      console.log("Error Info", errinfo);
   }

   render() {
      if (this.state.hasError) {
         return (
            <>
               <h1 className="text-danger text-center my-5">Something is not right</h1>
               <Link to="/" className="btn btn-primary btn-sm">Go back Home</Link>
            </>
         )
      }
      return this.props.children;
   }
}

export default ErrorBoundary
