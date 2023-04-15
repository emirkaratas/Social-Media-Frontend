import React from 'react'
import "./stories.scss"
import Story from '../story/Story'

function Stories() {
    return (
        <div className='stories d-flex gap-1'>
            <Story data={{ image: "https://dotnet.microsoft.com/static/images/redesign/social/square.png", self : true}} />
            <Story data={{ image: "https://pbs.twimg.com/media/Fr-1GNhWwAEFkHB.jpg:large", user: "Bilge Yılmaz" }} />
            <Story data={{ image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Porsche_911E_ca_1969.jpg/280px-Porsche_911E_ca_1969.jpg", user: "Erdem Koyuncu" }} />
            <Story data={{ image: "https://seeklogo.com/images/F/futbol-club-barcelona-logo-0FA85E4903-seeklogo.com.png", user: "Barcelona" }} />
            <Story data={{ image: "https://cdn.worldvectorlogo.com/logos/react-1.svg", user: "React" }} />
            <Story data={{ image: "https://footwearnews.com/wp-content/uploads/2022/12/GettyImages-1450127078.jpg?w=1024", user: "Lionel Messi" }} />
        </div>
    )
}

export default Stories