import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, name, description);
    setTitle("");
    setName("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <input
          type="text"
          placeholder="Escribe tu Nombre"
          onChange={(e) => setName(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={name}
        />
        <textarea
          type="text"
          placeholder="Escribe la descripcion"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        />
        <button className="bg-indigo-500 p-3 w-full mb-2">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
