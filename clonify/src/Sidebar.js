import React from 'react'
import './sidebar.css'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SidebarOptions from './sidebar_options'

function sidebar() {
  return (
    <div className='sidebar'>
      <img src='https://i.ibb.co/F68818f/clonifylogo.png' alt="spotify logo" className='sidebar_logo'></img>
      <SidebarOptions option="Home" Icon={HomeIcon}/>
      <SidebarOptions option="Search" Icon={SearchIcon}/>
      <SidebarOptions option="Library" Icon={LibraryMusicIcon}/>
      <br />
      <strong className='sidebar_title'>
        PLAYLISTS
      </strong>
      <hr />
      <SidebarOptions option='Malayalam'></SidebarOptions>
  </div>
  )
}

export default sidebar

// https://i.ibb.co/g6y0gMd/lib.png
// https://i.ibb.co/k0KfjCT/search.png
// https://i.ibb.co/sb3DZCM/home.png