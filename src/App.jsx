import React, { useEffect, useState } from "react";
import AddForm from "./components/AddForm";
import Button from "./components/Button";
import Card from "./components/Card";
import storage from "./storage";

const key = "_task";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    storage.get(key).then((value) => {
      setTasks(value || []);
    });
  }, []);

  const handleDelete = (id) => {
    const new_tasks = tasks.filter((task) => task.id != id);
    setTasks(new_tasks);
    storage.set(key, new_tasks);
  };

  const handleAdd = (data) => {
    const new_tasks = [...tasks, data];
    setTasks(new_tasks);
    storage.set(key, new_tasks);
  };

  const toggleForm = () => {
    setVisible(!visible);
  };

  const togggleRemind = (id) => {
    const updated_task = tasks.map((task) =>
      task.id === id ? { ...task, remindMe: !task.remindMe } : task
    );
    setTasks(updated_task);
    storage.set(key, updated_task);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="main-title">Task Tracker</h1>
        <Button
          onClick={toggleForm}
          type={!visible ? "success" : "danger"}
          title={!visible ? "Add Task" : "Cancel"}
        />
      </div>

      {visible && <AddForm onSubmit={handleAdd} />}
      <div className="task-container">
        {tasks.map((task) => (
          <Card
            key={task.id}
            title={task.taskName}
            subTitle={new Date(task.datetime).toLocaleString()}
            active={task.remindMe}
            onDelete={() => handleDelete(task.id)}
            onDoubleClick={() => togggleRemind(task.id)}
          />
        ))}
      </div>
    </div>
  );
}
