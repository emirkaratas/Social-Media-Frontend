import React from 'react'
import "../stories/stories.scss"

function Story({ data }) {
    if (data.self) {
        return (
            <div className='story story-self m-3'>
                <img src={data.image} alt="" />
                <button className='btn btn-lg'>
                    <span className='fw-bold'>+</span>
                </button>
            </div>
        )
    }
    return (
        <div className='story m-3'>
            <img src={data.image} alt="" />
            <span className='story-author '>{data.user}</span>
        </div>
    )
}

export default Story