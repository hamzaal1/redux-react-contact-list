import React from 'react'
import './Employer.css'
import { Link } from 'react-router-dom';
function Employer({image,name }) {
  return (
    <div className='employer'>
      <Link to={`/${name}`}>
        <img src={decodeURIComponent(image)} alt="" />
      </Link>
      <div>
        {name}
      </div>
    </div>
  )
}

export default Employer;