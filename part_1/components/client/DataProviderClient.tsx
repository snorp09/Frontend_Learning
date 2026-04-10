/*
Reads our task list from the local browser storage.
Needs to be a client side component to access local storage.
*/
"use client";

import useLocalStorage from "use-local-storage"

import AppMain from "@/components/client/AppMain";

export default function DataProviderClient() {
  const [taskCount, setTaskCount] = useLocalStorage<number>("taskCount", 0);
  const [taskList, setTaskList] = useLocalStorage<Array<Task>>("tasks", []);

  function addNewTaskToList(task: Task){
    const newTaskCount = taskCount + 1;
    task.id = newTaskCount;
    setTaskCount(newTaskCount);
    setTaskList(taskList.concat(task))
  }

  return (
    <AppMain data={taskList} onTaskAdd={addNewTaskToList}/>
  );
}
