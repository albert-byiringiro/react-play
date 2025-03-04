import React from 'react'

export default function TaskList({ todos, onTodoDone }) {
    const doing = todos.map(dos => (
        <li key={dos.id}>
            <span>{dos.title}</span>
            <button onClick={() => {
                onTodoDone(dos.id)
            }}>done</button>
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
