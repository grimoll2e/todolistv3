import React, { Component } from 'react'
import { MenuAppBar as AppBar } from '../components/Common/AppBar'
import { Box, Grid, Typography, Button } from "@mui/material";
import { UserAvatar } from '../components/Common/UserAvatar'
import { Input } from '../components/Common/Input';

class ProfilePage extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={8} sx={{ padding: 20 }}>
            <Grid item xs={10} alignSelf='flex-end'>
              <Typography variant="h3" color="initial" >Edit Profile</Typography>
            </Grid>
            <Grid item xs={2}>
              <UserAvatar sx={{ width: 80, height: 80 }} src='https://images.unsplash.com/photo-1533972751724-9135a8410a4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGN5YmVycHVua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            </Grid>
            <Grid item xs={6}>
              <Input label={'First Name'} name='firstName' error={false} />
            </Grid>
            <Grid item xs={6}>
              <Input label={'Last Name'} name='lastName' error={false} />
            </Grid>
            <Grid item xs={12} >
              <Input type='email' label={'E-mail'} name='e-mail' error={false} />
            </Grid>
            <Grid item xs={12} >
              <Input type='date' name='birthdate' error={false} />
            </Grid>
            <Grid item xs={6} >
              <Button
                fullWidth
                variant="contained"
                size='large'
                sx={{
                  background: '#db4c3f',
                  padding: 2
                }}>
                <Typography variant='h5' component='span'>
                  BTN-EditProfile
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={6} >
              <Button
                fullWidth
                variant="contained"
                size='large'
                color='secondary'
                sx={{
                  background: '#db4c3f',
                  padding: 2
                }}>
                <Typography variant='h5' component='span'>
                  BTN-Cancel
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} >
            <Button
                fullWidth
                variant="outlined"
                size='large'
                sx={{
                  padding: 2
                }}>
                <Typography variant='h5' component='span'>
                  Log out
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </>
    )
  }
}

export default ProfilePage