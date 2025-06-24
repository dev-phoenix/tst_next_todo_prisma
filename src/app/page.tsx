"use client";

import { Todo } from "@prisma/client";
import React, { useEffect, useState } from 'react'
import { addTodo, deleteTodo, getAllTodos } from "./todo";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const res = await getAllTodos();
    setTodos(res);
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputValue(e.target.value)
    // console.log(inputValue)
  }

  const handleAddTodo = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    await addTodo(inputValue);
    fetchTodos();
    return false
  }
  const handleTodoDelete = async (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    event.preventDefault()
    await deleteTodo(id);
    fetchTodos();
    return false
  }

  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <div className='font-bold text-xl'>
          Hell world
      </div>
      <form action="">
        <div className='flex flex-col gap-1'>
          <label htmlFor="">Task name</label>
          <input 
          type="text" 
          placeholder='Enter a task' 
          className='border border-white rounded-sm p-2'
          value={inputValue}
          onChange={onChange}/>
        </div>
        <button
          type='submit'
          className='mt-4 rounded-md border p-2 w-full bg-indigo-300 border-indigo-800 font-color-black'
          onClick={handleAddTodo}
          >Add</button>
      </form>

      {/** Todos list */}
      <div className="mt-8 flex flex-col w-[240px]">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center justify-between w-full mt-4">
            <p>{todo.name}</p>
            <button
              onClick={(e: React.ChangeEvent<HTMLInputElement>) => handleTodoDelete(e, todo.id)}
              className='rounded-md border p-2 border-[#372aac]'
              >Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home