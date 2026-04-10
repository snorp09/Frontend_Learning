"use client";

import TaskItem from "@/components/TaskItem";
import AddTaskBox from "./AddTaskBox";

interface AppMainProps {
  data: Array<Task>;
  onTaskAdd: (task: Task) => void;
}

export default function AppMain(props: AppMainProps) {
  return (
    <>
    <AddTaskBox onTaskAdd={props.onTaskAdd} />
    {props.data.map(item => <TaskItem key={item.id} task={item} />)}
    </>
  );
}
