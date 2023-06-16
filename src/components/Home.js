import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
        <h1>Home page</h1>
        <Link to={`/post`} > Go To Posts </Link>
    </div>
  )
}

export default Home