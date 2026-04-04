/*
Reads our task list from the local browser storage.
Needs to be a client side component to access local storage.
*/
"use client";

import useLocalStorage from "use-local-storage";
import AppMain from "./AppMain";

export default function DataProviderClient() {
  const [taskList, setTaskList] = useLocalStorage<Array<Task>>("tasks", []);
  return <AppMain data={taskList} />;
}
