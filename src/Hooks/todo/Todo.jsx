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

    const handleAddTodo = (title) => {
        let initialTodo = {
            id: todos.length + 1,
            title: title,
            done: false
        }

        setTodos([initialTodo, ...todos])
    }

    const handleTodoDone = (e) => {
        const tods = todos.filter(dos => dos.id !== e)
        setTodos(tods)
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList todos={todos} onTodoDone={handleTodoDone} />
        </>
    )
}
