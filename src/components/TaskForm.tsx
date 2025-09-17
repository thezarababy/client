import { useState, type FormEvent } from "react";
import type { Task } from "../types/task";
import { v4 as uuidv4 } from "uuid";

interface TaskFormProps {
  onAddTask: (task: Task) => void;
  onCancel?: () => void; // Optional prop for cancel button
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask, onCancel }) => {
  // Local state for each input field
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return; // prevents empty title

    const newTask: Task = {
      id: uuidv4(), // unique id
      title,
      description,
      dueDate,
      duration
      completed: false, // default value
    };

    onAddTask(newTask); // send task to App.tsx

    // Reset form fields
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md mb-4"
    >
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />

      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      ></textarea>
      <input
  type="text"
  placeholder="Duration (e.g., 2h, 30m)"
  value={duration}
  onChange={(e) => setDuration(e.target.value)}
  className="w-full p-2 mb-2 border rounded"
/>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Task
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
