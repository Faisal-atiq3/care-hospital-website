import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({service}) => {
    const {id, name, description, img } =service;
    return (
        <div className ="service pb-3">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p className="p-3">{description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-primary">Details</button>
            </Link>
           
        </div>
    );
};

export default Service;