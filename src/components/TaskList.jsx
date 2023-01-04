import TaskCard from "./TaskCard";
import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskList() {

  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-4xl font-bold text-white mb-3 text-center">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task,i) => (
        <TaskCard key={i} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
