import {TaskDTO} from "../dto/TaskDTO.ts";
const API_BASE_URL = 'http://localhost:8080/api/v1/tasks';

export async function getAllTsaks(email: string){
    return await (await  fetch(`${API_BASE_URL}?email=${email}`)).json();
}

export async function saveTask (task : TaskDTO) {
    return await (await fetch(API_BASE_URL, {

    })).json() as TaskDTO;
}

export async function updateTask (task : TaskDTO) {
    const response = await (await fetch(API_BASE_URL, {

    })).json() as TaskDTO;
}

export async function deleteTask (taskId : number) {
    
}