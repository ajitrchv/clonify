/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-diimport FavoriteIcon from '@mui/icons-material/Favorite';sable react-hooks/rules-of-hooks */
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SongRow from './SongRow';
import React from 'react'
import './body.css'
import Header from './Header';
import { useDataLayerValue } from './StateProvider';

function body({spotify}) {

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

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
      <div className='body_icons'>
        <PlayCircleIcon className='body_shuffle'/>
        <FavoriteIcon fontSize='large'/>
        <MoreHorizIcon />
      </div>
        {
          discover_weekly?.tracks.items.map((item)=>(
          <SongRow track={item.track} />
          ))
        }
        {console.log("Discoverweekly",discover_weekly)}
    </div>
    </div>
  )
}

export default body