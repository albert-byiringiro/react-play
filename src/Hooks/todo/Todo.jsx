import { useState } from "react"
import AddTodo from "./AddTodo"
import TaskList from "./TaskList"

let nextId = 3
const initialTodos = [
    { id: 1, title: 'Buy milk', done: true },
    { id: 2, title: 'Eat Tacos', done: false },
    { id: 3, title: 'Brew Tea', done: true },
]

export default function Todo() {
    const [todos, setTodos] = useState(initialTodos)
    const [todoInput, setTodoInput] = useState("")

    const handleInputTodo = (e) => {
        setTodoInput(e.target.value)
    }

    const handleAddTodo = () => {
        let initialTodo = {
            id: nextId + 1,
            title: todoInput,
            done: false
        }


        setTodos([...todos, initialTodo])
    }

    return (
        <>
            <AddTodo handleInput={handleInputTodo} handleAdd={handleAddTodo} />
            <TaskList todos={todos} />
        </>
    )
}
