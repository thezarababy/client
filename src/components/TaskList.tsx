import type { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onToggleTask: (id: string) => void;
}

const TaskList = ({ tasks, onDeleteTask, onToggleTask }: TaskListProps) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center">No tasks yet. Add one!</p>;
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id as string}
          task={task}
          onDelete={onDeleteTask}
          onToggle={onToggleTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
