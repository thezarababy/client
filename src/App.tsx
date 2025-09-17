// import { useState, useEffect } from "react";
// import type { Task } from "./types/task";
// import TaskForm from "./components/TaskForm";
// import TaskList from "./components/TaskList";

// function App() {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showForm, setShowForm] = useState(false);

//   // Load tasks from localStorage on first render
//   useEffect(() => {
//     const savedTasks = localStorage.getItem("tasks");
//     if (savedTasks) {
//       setTasks(JSON.parse(savedTasks));
//     }
//   }, []);

//   // Save tasks to localStorage whenever tasks change
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (task: Task) => {
//     setTasks([...tasks, task]);
//     setShowForm(false);
//   };

//   const deleteTask = (id: string) => {
//     setTasks(tasks.filter((task: Task) => task.id !== id));
//   };

//   const toggleTask = (id: string) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const handleCancel = () => {
//     setShowForm(false); // go back to task list without reloading
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>
//       {/* Toggle button */}
//       <div className="text-center mb-4">
//         {!showForm ? (
//           <button
//             onClick={() => setShowForm(true)}
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           >
//             ➕ Add Task
//           </button>
//         ) : (
//           <button
//             onClick={() => setShowForm(false)}
//             className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//           >
//             ✖ Cancel
//           </button>
//         )}
//       </div>
//       {/* Show form only if toggled */}
//       {showForm && <TaskForm onAddTask={addTask} onCancel={handleCancel} />}

//       {/* Task List will go here */}
//       <TaskList
//         tasks={tasks}
//         onDeleteTask={deleteTask}
//         onToggleTask={toggleTask}
//       />
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import type { Task } from "./types/task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showForm, setShowForm] = useState(true); // ✅ show TaskForm first

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

  // Add new task
  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    setShowForm(false); // after adding, go back to task list
  };

  // Delete a task
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle completion
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Cancel → back to list
  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>

      {/* Toggle button */}
      <div className="text-center mb-4">
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            ➕ Add Task
          </button>
        ) : (
          <button
            onClick={handleCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            ✖ Cancel
          </button>
        )}
      </div>

      {/* Show form or list */}
      {showForm ? (
        <TaskForm onAddTask={addTask} onCancel={handleCancel} />
      ) : (
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
        />
      )}
    </div>
  );
}

export default App;
