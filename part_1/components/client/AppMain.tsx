"use client";

import TaskItem from "../TaskItem";

interface AppMainProps {
  data: Array<Task>;
}

export default function AppMain(props: AppMainProps) {
  return (
    <>
    {props.data.map(item => <TaskItem key={item.id} task={item} />)}
    </>
  );
}
