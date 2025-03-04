import React, { useState } from 'react'

export default function TaskList({ todos, onDeleteTodo }) {
    const doing = todos.map(dos => (
        <li key={dos.id}>
            <Task todo={dos} onHandleDelete={onDeleteTodo} />
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

function Task({ todo, onHandleDelete }) {
    const [isEditing, setIsEditing] = useState(false)

    let todoContent

    if (isEditing) {
        todoContent = (
            <>
                <input type="text" />
                <button>save</button>
            </>
        )
    } else {
        todoContent = (
            <>
                <span>{todo.title}</span>
                <button>Edit</button>
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