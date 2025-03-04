import React from 'react'
import { useState } from 'react'
import { sculptureList } from './data'

/*
export const Gallery = () => {
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)

    let sculpture = sculptureList[index]

    const handleIndex = () => {
        setIndex(index + 1)
    }

    return (
        <>
            <input type="button" value="next" onClick={() => handleIndex()} />
            <div className="">
                <h1>
                    <i>{sculpture.name} </i>
                    by {sculpture.artist}
                </h1>
                <h3>
                    ({index + 1} of {sculptureList.length})
                </h3>
                <div>
                    <input type="button" value={showMore ? 'Hide' : 'Show'} onClick={() => setShowMore(prevState => !prevState)} />
                </div>
                <img src={sculpture.url} alt={sculpture.alt} />
                <hr />
                {
                    showMore
                        ? <p>{sculpture.description}</p>

                        : <div></div>
                }
            </div>
        </>
    )
}
*/

export const Form = () => {
    const [form, setForm] = useState({
        firstName: "Barbara",
        lastName: 'Rina',
        email: 'brina@sculpture.com',
    })

    return (
        <>
            <label htmlFor="firstName">First Name:
                <input type="text" value={form.firstName} id='firstName' onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
            </label>
            <label htmlFor="lastName">Last Name:
                <input type="text" value={form.lastName} id='lastName' onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
            </label>
            <label htmlFor="email">Email
                <input type="text" value={form.email} id='email' onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </label>
            <hr />
            <p>{form.firstName} {form.lastName} {form.email}</p>
        </>
    )
}
