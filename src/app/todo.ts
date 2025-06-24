"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const addTodo = async (task: string) => {
    try {
        await prisma.todo.create({
            data: {
                name: task,
            }
        })

        // revalidat    ePath("/")
        return {
            result: true,
            message: "Task added successfully!"
        }
    } catch (error: any){
        return {
            result: false,
            message: error.message,
        }
    }
}

export const deleteTodo = async (id: number) => {
    try {
        const dbTodo = await prisma.todo.findUnique({
            where: { id },
        })

        if(!dbTodo){
            return {
                result: false,
                message: "This todo does not exist"
            }
        }
        
        await prisma.todo.delete({ where: { id } })

        // revalidatePath("/")
        return {
            result: true,
            message: "Task deleted successfully!"
        }
    } catch (error: any){
        return {
            result: false,
            message: error.message,
        }
    }
}

export const getAllTodos = async () => {
    const todos = await prisma.todo.findMany({});
    return todos;
}