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
