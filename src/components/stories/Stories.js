import React from 'react'
import "./stories.scss"

function Stories() {
    return (
        <div className='stories d-flex gap-1'>
            <div className='story story-self m-3'>
                <img src="https://dotnet.microsoft.com/static/images/redesign/social/square.png" alt="" />
                <button className='btn btn-lg'>
                    <span className='fw-bold'>+</span>               
                </button>
            </div>
            <div className='story m-3'>
                <img src="https://pbs.twimg.com/media/Fr-1GNhWwAEFkHB.jpg:large" alt="" />
                <span className='story-author '>Bilge Yılmaz</span>
            </div>
            <div className='story m-3'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Porsche_911E_ca_1969.jpg/280px-Porsche_911E_ca_1969.jpg" alt="" />
                <span className='story-author '>Erdem Koyuncu</span>
            </div>
            <div className='story m-3'>
                <img src="https://seeklogo.com/images/F/futbol-club-barcelona-logo-0FA85E4903-seeklogo.com.png" alt="" />
                <span className='story-author'>Barcelona</span>
            </div>
            <div className='story m-3'>
                <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="" />
                <span className='story-author'>React</span>
            </div>
            <div className='story m-3'>
                <img src="https://footwearnews.com/wp-content/uploads/2022/12/GettyImages-1450127078.jpg?w=1024" alt="" />
                <span className='story-author'>Lionel Messi</span>
            </div>
        </div>
    )
}

export default Stories