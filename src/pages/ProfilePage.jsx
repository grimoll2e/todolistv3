import React, { Component } from 'react'
import { MenuAppBar as AppBar } from '../components/Common/AppBar'
import { Box, Grid, Typography, TextField } from "@mui/material";
import { UserAvatar } from '../components/Common/UserAvatar'

class ProfilePage extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={8} sx={{ padding: 10 }}>
            <Grid item xs={10}>
              <Typography variant="h3" color="initial">Edit Profile</Typography>
            </Grid>
            <Grid item xs={2}>
              <UserAvatar sx={{ width: 80, height: 80 }} src='https://images.unsplash.com/photo-1533972751724-9135a8410a4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGN5YmVycHVua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
            </Grid>
            <Grid item xs={6}>
              <TextField id="outlined-basic" label="FirstName" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="outlined-basic" label="LastName" />
            </Grid>
            <Grid item xs={12} >
              <TextField id="outlined-basic" label="Email" />
            </Grid>
            <Grid item xs={12} >
             <TextField id="outlined-basic" label="Birth Day" />
              </Grid>
            <Grid item xs={6} >BTN-EditProfile</Grid>
            <Grid item xs={6} >BTN-Cancel</Grid>
            <Grid item xs={12} >BTN-LogOut</Grid>
          </Grid>
        </Box>
      </>
    )
  }
}

export default ProfilePage