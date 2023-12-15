import './TaskList.css';
import {useTaskDispatcher, useTaskList} from "../../context/task-context.tsx";
import {useUser} from "../../context/user-context.tsx";
import {useEffect} from "react";
import {getAllTsaks} from "../../services/task-services.tsx";
import {Task} from "../task/Task.tsx";

export function TaskList() {
    const taskList = useTaskList();
    const taskDispatcher = useTaskDispatcher();
    const user= useUser();

    useEffect(()=>{
        getAllTsaks(user!.email!).then(taskList => {
            taskDispatcher({type: 'set-list', taskList});
        }).catch(err => {
            alert("Failed to load tasks");
        })
        return ()=>{
            taskDispatcher({type: 'set-list', taskList: []});
        }
    }, []);


    return (
        <>
            {
                taskList.map(task =>
                <Task key={task.id} {...task}/>)
            }
        </>
    );
}