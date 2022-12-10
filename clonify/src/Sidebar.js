import React from 'react'
import './sidebar.css'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SidebarOptions from './sidebar_options'
import { useDataLayerValue } from './StateProvider';

function sidebar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{playlists}, dispatch] = useDataLayerValue();
  console.log("Playlists",playlists);


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
      {playlists?.items?.map(playlist=>(
        console.log("name>>>>>", playlist.name),
        <SidebarOptions key={playlist.name} option={playlist.name}/>
      )) }
      
  </div>
  );
}

export default sidebar

// https://i.ibb.co/g6y0gMd/lib.png
// https://i.ibb.co/k0KfjCT/search.png
// https://i.ibb.co/sb3DZCM/home.png