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
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    const handleNameChange = (e) => setPerson({ ...person, name: e.target.value })

    const handleTitleChange = (e) => {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        })
    }

    const handleCityChange = (e) => {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        })
    }

    return (
        <>
            <label htmlFor="name">First Name:
                <input type="text" value={person.name} id='name' onChange={handleNameChange} />
            </label>
            <label htmlFor="title">Title:
                <input type="text" value={person.artwork.title} id='title' onChange={handleTitleChange} />
            </label>
            <label htmlFor="city">city
                <input type="text" value={person.artwork.city} id='city' onChange={handleCityChange} />
            </label>
            <hr />
            <p>{person.name} by {person.artwork.title}
                <br />
                Located in {person.artwork.city}</p>
            <img src={person.artwork.image} alt={person.artwork.title} />
        </>
    )
}
