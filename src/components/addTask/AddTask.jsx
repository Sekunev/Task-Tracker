import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const AddTask = ({ getTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    console.log(newTask);
    addNewTask(newTask);
    setTask("");
    setDate("");
  };

  const addNewTask = async (newTask) => {
    const url = "https://63522c2b9d64d7c713102872.mockapi.io/api/task";
    try {
      await axios.post(url, newTask);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className=" d-flex justify-content-center flex-column"
      >
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            // yukardaki onChange içersine sadece fonksiyon ismini yazarak yukarıda fonksiyonuda tanımlayabilirdik. aşağıdaki fonk gibi
            // const handleDate = (e) => {
            //   setDate(e.target.value);
            // };
          />
        </Form.Group>

        <Form.Group className="mb-1 " controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="datetime-local"
            className="text-muted "
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </Form.Group>
        <Button
          style={{
            backgroundColor: "rgb(163 163 72) ",
            color: "white",
            width: "30%",
            textAlign: "center",
          }}
          className="m-auto"
          variant=" btn-lg"
          type="submit"
        >
          Save
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
