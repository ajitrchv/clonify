import React from 'react'
import './player.css'
import Sidebar from './Sidebar'
import Footer from './footer'
import Body from './body'

function Player({spotify}) {
  return (
    <div className='player'>
        <div className='player_body'>

          <Sidebar />

          <Body sptify={spotify}/>

        </div>
        
        <Footer/>

    </div>
  )
}

export default Player