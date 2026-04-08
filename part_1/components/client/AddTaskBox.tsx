"use client";

import { useState } from "react";

interface AddTaskBoxProps {
    onTaskAdd: (task: Task) => void;
}

export default function AddTaskBox(props: AddTaskBoxProps) {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    function addTask(){

        if(title === "" || description === ""){
            alert("Empty Title/Description.") // Place Holder alert, form should turn invalid.
            return;
        }

        const newTask: Task = {
            "id": 0,
            "title": title,
            "description": description,
            "complete": false,
            "urgency": 1
        };
        props.onTaskAdd(newTask);
        setTitle("");
        setDescription("");
    }

    return (
        <div className="flex flex-col">
            <input type="text" placeholder="Title..." onChange={e => setTitle(e.target.value)} />
            <textarea placeholder="Description..." onChange={e => setDescription(e.target.value)} />
            <button className="cursor-pointer" onClick={addTask}>Add Task</button>
        </div>
    );
}