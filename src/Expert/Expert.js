import React from 'react';

const Expert = ({expert}) => {
    const {name,img,expertize}= expert;
    
    return (
        <div className=" container ">
         <img src={img} alt="" />
         <h1>{name}</h1>
         <h4 className="text-danger">{expertize}</h4>
        </div>
    );
};

export default Expert;