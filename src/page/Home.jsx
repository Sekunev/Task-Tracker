import React, { useState, useEffect } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Home = () => {
  const [isOpen, setİsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([]); // axios ile gelen veriyi task içerisine atalım.
  // https://mockapi.io/projects'den eğitim amaçlı api oluşturduk.
  const url = "https://63522c2b9d64d7c713102872.mockapi.io/api/task";

  const toggle = () => {
    setİsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  //CRUD  -READ-

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
    console.log(data);
  };

  // getTask(); useEffect olmadan yalın getTask()'i çağırdığımızda render-state (infinitive loop) durumu oluşur. Engellemek için useEffect didmount kullanırız. Böylece ilk renderda getTask() çalışır.Sonra birdaha çalışmaz.

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button
        onClick={() => {
          toggle();
        }}
        style={{
          backgroundColor: "#1E5959 ",
          color: "white",
          textAlign: "center",
          border: "none",
        }}
      >
        {text}
      </Button>
      {isOpen && <AddTask getTask={getTask} />}

      <TaskList task={task} getTask={getTask} />
    </div>
  );
};

export default Home;
