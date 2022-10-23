import axios from "axios";
import React from "react";
import { TiDelete } from "react-icons/ti";

const TaskList = ({ task, getTask }) => {
  console.log(task);

  const deleteTask = async (id) => {
    const url = "https://63522c2b9d64d7c713102872.mockapi.io/api/task";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {}
    getTask();
  };

  return (
    <div>
      {task.map((item) => {
        const { id, date, task } = item;
        return (
          <div
            key={id}
            className="tasklist mt-2 d-flex justify-content-between p-2 rounded-2"
          >
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div className="ti d-flex align-items-center">
              <TiDelete
                onClick={() => deleteTask(id)}
                style={{
                  cursor: "pointer",
                  marginRight: "2px",
                  fontSize: "3rem",
                  boxShadow: "rgba(30, 10, 90, 0.95) 2px 2px 2px 2px",
                  color: "#1E5959",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
