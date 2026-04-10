"use client";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem(props: TaskItemProps) {
  const task = props.task;
  
  return (
    <div>
      <header>
        <h1>{task.title}</h1>
      </header>
      <div>
        <p>{task.description}</p>
      </div>
      <footer>
        <input type="checkbox" id="complete_box" defaultChecked={task.complete} />
        <label htmlFor="complete_box">Complete</label>
        <button>Delete</button>
      </footer>
    </div>
  );
}
