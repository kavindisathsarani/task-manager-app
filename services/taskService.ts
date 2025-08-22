import { Task } from "@/types/task";
import api from "./config/api"
import { addDoc,collection } from "firebase/firestore";
import { db } from "@/firebase";

//for refer to collection
export const taskColRef = collection(db,"tasks")

//firebase firestore
export const createTask = async (task:Task) => {
    const docRef = await addDoc(taskColRef,task)
    return docRef.id
}

export const getAllTasks = async () => {
    const res = await api.get("/task");
    return res.data;
}

export const addTask = async (task:any) => {
    const res = await api.post("/task", task);
    return res.data;
}


