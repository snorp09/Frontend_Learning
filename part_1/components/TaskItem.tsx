interface TaskItemProps {
  task: Task;
}

export default function TaskItem(props: TaskItemProps) {
  return (
    <div>
      <header>
        <h3>Gemma. (Title)</h3>
      </header>
      <div>
        <p>Body</p>
      </div>
      <footer>
        <button>Complete</button>
      </footer>
    </div>
  );
}
