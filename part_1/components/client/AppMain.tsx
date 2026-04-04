"use client";

import TaskItem from "../TaskItem";

interface AppMainProps {
  data: Array<Task>;
}

export default function AppMain(props: AppMainProps) {
  return (
    <>
      <TaskItem
        task={{
          title: "Gemma.",
          description: "Gemma.",
          id: 0,
          urgency: 0,
          complete: false,
        }}
      />
    </>
  );
}
