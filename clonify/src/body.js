/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './body.css'
import Header from './Header';
import { useDataLayerValue } from './StateProvider';

function body({spotify}) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log("discover weekly>>",discover_weekly)
  return (
    <div className='body'>
    <Header spotify={spotify}/>

    <div className='body_info'>
      <img src={discover_weekly?.images[0]?.url} alt='Discover Weekly'/>
      <div className='body_infotext'>
        <strong>PLAYLIST</strong>
        <h2> Discover Weekly</h2>
        <p>{discover_weekly?.description}</p>
      </div>
    </div>
    <div className='body_songs'>
      <div className='body_icons'></div>
    </div>
    </div>
  )
}

export default body