import React from 'react'
import './sidebar_option.css'
function sidebar_options({option, Icon}) {
  return (
    <div className='SideBarOption'>
        { Icon ? <Icon className="SideBarOption_Icon"/> 
        : <p></p>}
        {Icon ? <h4>{option}</h4>  : <p>{option}</p>}
    </div>
  )
}

export default sidebar_options