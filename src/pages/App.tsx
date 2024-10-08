import React, { useState } from "react";
import { Form } from "../components/Form";
import { List } from "../components/List";
import style from "./App.module.scss";
import { TimerCard } from "../components/TimerCard";
import { ITask } from "../types/task";

function App() {
  const [tasks, setTasks] = React.useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  const selectTask = (selectedTask: ITask) => {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  };

  const completeTask = () => {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  };

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <TimerCard selectedTask={selected} completeTask={completeTask} />
    </div>
  );
}

export default App;
