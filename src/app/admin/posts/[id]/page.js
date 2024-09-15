import React from 'react';

const TaskDetailPage = ({params: {id}}) => {
    return (
        <section>
          <div className='container'>
            <h1>{id}</h1>
            <h2>Task Details</h2>    
        </div>  
        </section>
    );
};

export default TaskDetailPage;