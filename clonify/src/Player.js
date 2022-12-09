import React from 'react'
import './player.css'
import Sidebar from './Sidebar'
import Footer from './footer'
import Body from './body'

function Player(props) {
  return (
    <div className='player'>
        <div className='player_body'>

          <Sidebar />

          <Body />

        </div>
        
        <Footer/>

    </div>
  )
}

export default Player