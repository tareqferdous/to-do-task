import Task from "./Task";

export default function TaskList({
  tasks,
  handleDeleteTask,
  handleChangeTask,
}) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleChangeTask={handleChangeTask}
        />
      ))}
    </ul>
  );
}
