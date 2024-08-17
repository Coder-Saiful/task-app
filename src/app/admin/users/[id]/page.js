import React from 'react';

const UserDetails = ({params: {id}}) => {
    return (
        <section>
          <div className='container'>
            <h1>{id}</h1>
            <h2>User Details</h2>    
        </div>  
        </section>
    );
};

export default UserDetails;