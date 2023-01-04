import React, { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task"; // doy nombre como alias porque tiene el mismo nombre

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(taskTitle, taskName, taskDescrition) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        name: taskName,
        description: taskDescrition,
      },
    ]);
  }

  function delateTask(taskId) {
    setTasks(tasks.filter((tasks) => tasks.id !== taskId));
  }
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        delateTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
