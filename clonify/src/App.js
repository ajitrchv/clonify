
import React, { useEffect, useState } from 'react';
import './App.css';
import Player from './Player'
import Login from './Login';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './StateProvider';

const Spotify = new SpotifyWebApi()

function App() 
{
  const [token, setToken] = useState(null);
  const [uname,setUname] = useState('Default');
  const [{}, dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      Spotify.setAccessToken(_token)
      Spotify.getMe().then(user => {
        console.log('user here >>>>',user)
        setUname(user.display_name)
      });

    }

    console.log('Token  here>>>>', token);
  },[]);

  return (
    <div className="App">

      {
        token ? (
          <Player name={uname}/>
        ):
        (
          <Login />
        )
      }
      

    </div>
  );
}

export default App;
