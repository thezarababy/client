import { useState, useEffect } from "react";
import type { Task } from "./types/task";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from localStorage on first render
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>

      {/* Task Form will go here */}
      <TaskForm onAddTask={addTask} />

      {/* Task List will go here */}
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}

export default App;
