interface TaskItemProps {
  task: Task;
}

export default function TaskItem(props: TaskItemProps) {
  const { title, description, complete } = props.task;

  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <div>
        <p>{description}</p>
      </div>
      <footer>
        <input type="checkbox" id="complete_box" defaultChecked={complete} />
        <label htmlFor="complete_box">Complete</label>
        <button>Delete</button>
      </footer>
    </div>
  );
}
