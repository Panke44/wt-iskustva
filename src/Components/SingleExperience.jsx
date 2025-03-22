import React from 'react'

const SingleExperience = (props) => {
  return (
    // <a href={props.href} className="review-card-link">
    <div className="review-card">
        <div className="review-img">
            <img src={props.img} alt=""/>
        </div>
    
        <div className="review-info">
            <h4> {props.name}</h4>
            <div className="review-info-text">
                <p> <i className="fa-regular fa-user"></i> {props.position} </p>
                <p> <i className="fa-solid fa-briefcase"></i> {props.employer} </p>
                <p> <i className="fa-solid fa-location-dot"></i> {props.location} </p>
            </div>
        </div>
    
        <div className="experience-status">
            <span className={props.status}> {props.status} </span>
            <p>{props.year}.</p>
        </div>
    </div>
// </a>

  )
}

export default SingleExperience