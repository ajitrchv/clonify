import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './StateProvider';

function Header() {
    const [{user}, dispatch] = useDataLayerValue();
    console.log("user>>>>>", user)
  return (
    <div className='header'>
        <div className='header_left'>
            <SearchIcon />
            <input placeholder='Search for artists, songs or albums!' type='text'/>
        </div>
        <div className='header_right'>
            <Avatar src={user?.images[0]?.url} alt="Avatar image"/>
            <h4>{user?.display_name}</h4> 
        </div>
    </div>
  )
}

export default Header