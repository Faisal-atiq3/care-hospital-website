import React from 'react';

const Expert = ({expert}) => {
    const {name,img,expertize}= expert;
    
    return (
     


        <div class="col">
    <div class="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{expertize}</p>
      </div>
    </div>
  </div>
        
        
      











    );
};

export default Expert;


{/* <div className=" container ">
<img src={img} alt="" />
<h1>{name}</h1>
<h4 className="text-danger">{expertize}</h4>
</div> */}