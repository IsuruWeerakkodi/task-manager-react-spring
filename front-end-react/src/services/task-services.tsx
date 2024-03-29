import {TaskDTO} from "../dto/TaskDTO.ts";
const API_BASE_URL = 'http://localhost:8080/api/v1/tasks';

export async function getAllTsaks(email: string){
    return await (await  fetch(`${API_BASE_URL}?email=${email}`)).json();
}

export async function saveTask (task : TaskDTO) {
    return await (await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })).json() as TaskDTO;
}

export async function updateTask (task : TaskDTO) {
    const response = await fetch(`{API_BASE_URL}/${task.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            description: task.description,
            status: !task.status,
            email: task.email
        })
    });
    if (!response.ok) throw new Error("Failed to update the task, try again!");
}

export async function deleteTask (taskId : number) {
    const response = await fetch(`${API_BASE_URL}/${taskId}`, {method: 'DELETE'});
    if (!response.ok) throw new Error("Failed to delete the task, try again!");
}