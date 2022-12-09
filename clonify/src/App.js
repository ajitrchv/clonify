
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
  // const [token, setToken] = useState(null);
  // const [uname,setUname] = useState('Default');
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      // setToken(_token);
      
      Spotify.setAccessToken(_token)
      Spotify.getMe().then(user => {
        // console.log('user here >>>>',user)
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

    }

    // console.log('Token  here>>>>', token);
  },[]);

  // console.log("user >>>", user)
  // console.log("here what token is>>>", token)

  return (
    <div className="App">

      {
        token ? (
          <Player />
        ):
        (
          <Login />
        )
      }
      

    </div>
  );
}

export default App;
