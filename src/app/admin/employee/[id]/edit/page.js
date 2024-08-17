import React from 'react';

const EmployeeEditPage = ({params: {id}}) => {
    return (
        <section>
          <div className='container'>
            <h1>{id}</h1>
            <h2>Employee Edit</h2>    
        </div>  
        </section>
    );
};

export default EmployeeEditPage;