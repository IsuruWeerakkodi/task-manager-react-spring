import './SignIn.css';
import React, {useRef, useState} from "react";
export function SignIn() {

    const txtRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState("")
    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        if (!value.trim()) return;


    }

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-row gap-2 border-bottom p-2">
            <div className="input-group ">
                <input type="text" className="form-control" placeholder="Enter task to add..." aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <button className="btn btn-primary rounded-4 ">Add Task</button>
            </form>
    );
}