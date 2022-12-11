import React from 'react'
import './songRow.css';

function SongRow({ track }) {
    console.log("Track >>>>", track)
  return (
    <div className='songRow'>
        <img className='songRow_album' src={track.album.images[0].url} alt=''/>
        <div className='song_info'>
        <h1> {track.name} </h1>
        <p>
        {track.artists.map((item)=>item.name).join(", ")} -{" "}
        {track.album.name}
        </p>
        </div>
    </div>
  )
}

export default SongRow