import React from 'react';

const CategoryDeTailsPage = ({params: {id}}) => {
    return (
        <section>
          <div className='container'>
            <h1>{id}</h1>
            <h2>Category Details</h2>    
        </div>  
        </section>
    );
};

export default CategoryDeTailsPage;