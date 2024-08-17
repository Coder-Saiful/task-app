import React from 'react';

const EmployeeDetails = ({params: {id}}) => {
    return (
        <section>
          <div className='container'>
            <h1>{id}</h1>
            <h2>Employee Details</h2>    
        </div>  
        </section>
    );
};

export default EmployeeDetails;