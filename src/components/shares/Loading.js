import React from 'react'
import loadingImg from '../../statics/loading.gif'

const Loading = () => {
   return (
      <div className="loadingBox">
         <img src={loadingImg} />
      </div>
   )
}

export default Loading