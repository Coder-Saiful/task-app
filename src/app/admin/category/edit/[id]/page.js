import React from 'react';

const CategoryEditPagee = ({params: {id}}) => {
    return (
        <section>
          <div className='container'>
            <h1>{id}</h1>
            <h2>Category Edit</h2>    
        </div>  
        </section>
    );
};

export default CategoryEditPagee;