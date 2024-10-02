"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const CreateTaskButton = () => {
  const router = useRouter();

  useEffect(() => {
    
    let create_task_card = document.querySelector(".task_create_card .card");
    let task_card = document.querySelector(".task_card .card");

    create_task_card.setAttribute(
      "style",
      `height: ${task_card.clientHeight}px`
    );

    window.addEventListener("resize", function () {
      create_task_card.setAttribute(
      "style",
      `height: ${task_card.clientHeight}px`
    );
    });
  }, []);
  return (
    <div className="task_create_card" style={{ cursor: "pointer" }} onClick={() => router.push("/tasks/create")}>
      <div className="card d-flex justify-content-center align-items-center">
        <div className="create_note">
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskButton;
