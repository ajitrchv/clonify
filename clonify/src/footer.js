import React from 'react'
import './footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import {Grid, Slider} from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function footer() {
  return (
    <div className='footer'>

    <div className='footer_left'>
    <img src="https://instagram.fcok4-1.fna.fbcdn.net/v/t51.2885-19/317184916_849280796319444_2431899356081026483_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcok4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=DI1j4SVpggwAX-LBJeX&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBVVfihQgB0CXMl2d2cHKzJ1-kE9t9LjfqaieBkLxzv4g&oe=63995F92&_nc_sid=8fd12b" alt="" className='footer_album_logo'></img>
    <div className='footer_info'>
      <h4>Yeaaah Baby</h4>
      <p>Hardpope</p>
      </div>
    </div>
    <div className='footer_center'>
    
    <ShuffleIcon className='footer_green'/>
    <SkipPreviousIcon className='footer_icon'/>
    <PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
    <SkipNextIcon className='footer_icon'/>
    <RepeatIcon className='footer_green'/>

    </div>
    <div className='footer_right'>
    
    <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
    
    </div>

    </div>
  )
}

export default footer