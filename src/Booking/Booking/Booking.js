import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const{serviceId}=useParams();
    const [service, setService] =useState([]);

    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setService(data));
        
        
    },[])

    const exactService =service.filter (item=> item.id===serviceId );

    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={exactService[0]?.img} />
  <Card.Body>
    <Card.Title>{exactService[0]?.name}</Card.Title>
    <Card.Text>
      {exactService[0]?.details}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

        </div>
    );
};

export default Booking;