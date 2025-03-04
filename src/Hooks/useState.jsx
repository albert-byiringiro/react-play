import React from 'react'
import { useState } from 'react'
import { sculptureList } from './data'

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
                <h1>{sculpture.name} by {sculpture.artist}</h1>
                <p>{index + 1} of {sculptureList.length}</p>
                <div>
                    <input type="button" value="Show More" onClick={() => setShowMore(prevState => !prevState)} />
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
