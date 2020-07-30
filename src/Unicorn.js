import React from 'react';

const Unicorns = ({unicorns}) => {
  
        const unicornList =unicorns.map(unicorn => {
            if (unicorn.age > 10){
                return (
                <div className="unicorn" key={unicorn.id}>
            <div>Name: { unicorn.name }</div>
            <div>Age: { unicorn.age }</div>
            <div>Color: { unicorn.color }</div>
            </div>
            )
            }else {
                return null;
            }
            
    })
        return(
           <div className="unicorn-list">
               { unicornList }
           </div> 
        )
    
}

export default Unicorns