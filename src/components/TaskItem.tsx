import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

const TaskItem = ({ task, onDelete, onToggle }: TaskItemProps) => {
  return (
    <div className="flex items-center justify-between bg-white p-3 mb-2 rounded shadow">
      {/* Left side: Checkbox + Task info */}
      <div className="flex items-center space-x-3">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id as string)}
          className="h-5 w-5 text-blue-600 cursor-pointer"
        />

        {/* Task details */}
        <div>
          <p
            className={`font-medium ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </p>
          {task.dueDate && (
            <p className="text-sm text-gray-400">Due: {task.dueDate}</p>
          )}
        </div>
      </div>

      {/* Right side: Delete button */}
      <button
        onClick={() => onDelete(task.id as string)}
        className="text-red-500 hover:text-red-700 font-semibold"
      >
        ❌
      </button>
    </div>
  );
};

export default TaskItem;
