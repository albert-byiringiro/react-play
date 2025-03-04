import React from 'react'
import { useState } from 'react'
import { sculptureList } from './data'

export const Gallery = () => {
    const [index, setIndex] = useState(0)

    let sculpture = sculptureList[index]
    return (
        <>
            <input type="button" value="next" />
            <div className="">
                <img src={sculpture.url} alt={sculpture.alt} />
                <hr />
                <h1>{sculpture.name}</h1>
                <p>{sculpture.artist}</p>
                <p>{sculpture.description}</p>
            </div>
        </>
    )
}
