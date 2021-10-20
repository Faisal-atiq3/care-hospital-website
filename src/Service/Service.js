import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({service}) => {
    const {id, name, description, img } =service;
    return (
        <div class="col">
    <div class="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
        <Link><button className="btn btn-primary">Details</button>
            </Link>
      </div>
    </div>
  </div>
        
    );
};

export default Service;



{/* <div className ="service pb-3">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p className="p-3">{description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-primary">Details</button>
            </Link>
           
        </div> */}