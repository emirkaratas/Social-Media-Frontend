import React from 'react'
import "./home.scss"
import Stories from '../../components/stories/Stories'
import Posts from '../../components/posts/Posts'

function HomePage() {
  return (
    <div className='home-page p-2'>
      <Stories />
      <Posts />
    </div>
  )
}

export default HomePage