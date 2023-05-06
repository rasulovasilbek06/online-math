import React from 'react'
import right from './right.png'
import Students from './Students'
import { Link } from 'react-router-dom'

const Course = (prop) => {
  return (
    <div className='card'>
      <div className="top">
        <img src={prop.img} alt="" />
      </div>
      <div className="title">{prop.title}</div>
      <div className="about">{prop.about}</div>
      <div className="bottom">
        <Link to={"error"}>
      <div className='bottom-btn'>read more <img src={right} alt="" /> </div>
        </Link>
      </div>
    </div>
  )
}

export default Course