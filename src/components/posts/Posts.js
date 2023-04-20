import React from 'react'
import Post from '../post/Post'

function Posts() {
    return (
        <div className='posts mt-3 px-2 px-lg-5'>
            <Post post={{
                postId: 9894,
                profilePic: "https://seeklogo.com/images/F/futbol-club-barcelona-logo-0FA85E4903-seeklogo.com.png",
                userId: 876,
                userName: "Barcelona",
                datePosted: "1 min ago",
                description: "What a game!",
                image: ["https://footwearnews.com/wp-content/uploads/2022/12/GettyImages-1450127078.jpg?w=1024","https://images5.alphacoders.com/115/1155095.jpg"]
            }
            } />
            <Post post={{
                postId: 9895,
                profilePic: "https://pbs.twimg.com/media/Fr-1GNhWwAEFkHB.jpg:large",
                userId: 976,
                userName: "Erdem Koyuncu",
                datePosted: "5 sec ago",
                description: "What a car!",
                image: ["https://images5.alphacoders.com/115/1155095.jpg"]
            }
            } />
             <Post post={{
                postId: 9896,
                profilePic: "https://pbs.twimg.com/media/Fr-1GNhWwAEFkHB.jpg:large",
                userId: 977,
                userName: "Erdem Koyuncu",
                datePosted: "5 sec ago",
                description: "What a car!",
                image: []
            }
            } />
        </div>
    )
}

export default Posts  