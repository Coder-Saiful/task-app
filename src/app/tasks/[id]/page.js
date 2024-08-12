import React from "react";

export const metadata = {
  title: "Task | Detail"
}

const TaskDetailPage = ({params}) => {
  return (
    <section>
      <div className="container">
        <h2>Task Detail</h2>
        <h2>domain.com/{params.id}</h2>
      </div>
    </section>
  );
};

export default TaskDetailPage;
