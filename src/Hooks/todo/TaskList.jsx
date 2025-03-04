import React from 'react'

export default function TaskList({ todos }) {
    const doing = todos.map(dos => (
        <li key={dos.id}>
            <span>{dos.title}</span>
            <button>Save</button>
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
