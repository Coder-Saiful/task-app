import React from 'react';

const TaskEditPage = ({params: {id}}) => {
    return (
        <section>
          <div className='container'>
            <h1>{id}</h1>
            <h2>Task Edit</h2>    
        </div>  
        </section>
    );
};

export default TaskEditPage;