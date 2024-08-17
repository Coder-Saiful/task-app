import React from 'react';

const UserEdit = ({params: {id}}) => {
    return (
        <section>
          <div className='container'>
            <h1>{id}</h1>
            <h2>User Edit</h2>    
        </div>  
        </section>
    );
};

export default UserEdit;