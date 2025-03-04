export default function AddTodo({ handleInput, handleAdd }) {
    return (
        <>
            <input type="text" placeholder="Add todo" onChange={handleInput} />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}
