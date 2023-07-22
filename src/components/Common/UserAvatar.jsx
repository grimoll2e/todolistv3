import defaultPhoto from '../../assets/user.png'
import { Avatar } from '@mui/material'

import React from 'react'

export  function UserAvatar(props) {
  return   <Avatar src={props.src||defaultPhoto} sx={{width:40,height:40,cursor:'pointer',...props.sx}} {...props}/>
  
}
