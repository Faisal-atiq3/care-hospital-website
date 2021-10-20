import React from 'react';
import Expert from '../Expert/Expert';
import doc1 from '../Images/doc1.jpg'
import doc2 from '../Images/doc2.jpg'
import doc3 from '../Images/doc3.jpg'
import doc4 from '../Images/doc4.jpg'
import doc5 from '../Images/doc5.jpg'
import doc6 from '../Images/doc6.jpg'

const experts =[
    {
        id:1,
        img: doc1,
        name : 'Andrew Smith',
        expertize: 'Denatal Sergoun '
    },
    {
        id:2,
        img: doc2,
        name : 'Jann Paul',
        expertize: 'Denatal Sergoun '
    },
    {
        id:3,
        img: doc3,
        name : 'Zakaria Smith',
        expertize: 'Gynologist Sergoun '
    },
    {
        id:4,
        img: doc4,
        name : 'Sakib Anderson',
        expertize: 'Aurthopadics Sergoun '
    },
    {
        id:5,
        img: doc5,
        name : 'John Cina',
        expertize: 'ENT Sergoun '
    },
    {
        id:6,
        img: doc6,
        name : 'Triple H',
        expertize: 'Medecine Sergoun '
    }
]

const Experts = () => {
    return (
        <div id="experts" className="container"> 
        <h1 className="text-primary mt-5"> Our Doctors </h1>
            
            <div className="row">
                {
                    experts.map(expert =><Expert
                        key={expert.name}
                        expert={expert}
                    
                    >
                       
                    </Expert>)
                    
                }

            </div>
        </div>
    );
};

export default Experts;