import React, { useState } from 'react'

export default function TaskList({ todos, onDeleteTodo, onChangeTodo }) {
    const doing = todos.map(dos => (
        <li key={dos.id}>
            <Task todo={dos} onHandleDelete={onDeleteTodo} onChange={onChangeTodo} />
        </li>
    ))

    return (
        <>
            <ul>
                {
                    doing
                }
            </ul>
        </>
    )
}

function Task({ todo, onHandleDelete, onChange }) {
    const [isEditing, setIsEditing] = useState(false)

    let todoContent

    if (isEditing) {
        todoContent = (
            <>
                <input type="text" value={todo.title} onChange={(e) => {
                    onChange({
                        ...todo,
                        title: e.target.value
                    })
                }} />
                <button onClick={() => setIsEditing(false)}>save</button>
            </>
        )
    } else {
        todoContent = (
            <>
                <span>{todo.title}</span>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    return (
        <>
            <input type="checkbox" name="done" id="done" onClick={(e) => !e} />
            {todoContent}
            <button onClick={() => onHandleDelete(todo.id)}>Delete</button>
        </>
    )
}