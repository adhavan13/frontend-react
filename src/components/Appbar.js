import { NotificationsOutlined, RedeemOutlined, SearchOutlined } from "@mui/icons-material";
import {
  Box, TextField, ToggleButton, ToggleButtonGroup,
  FormControl, Select, MenuItem, Avatar, Switch, Typography,
  Stack,
  InputAdornment
} from '@mui/material';
import React, { useState } from "react";
import people from '../assets/people.jpg';

function Appbar(){
  const [time,setTime]=useState('card')
    return( 
        <Box sx={{ width: '1127px',bgcolor:'white',zIndex:-1000,paddingLeft:'88px',paddingTop:'10px',paddingBottom:'10px',top:0,position:'absolute',borderBottom:"0.004px groove #8D8D8D"}} elevation={0}>
            <Stack direction='row' gap='8px'>
          <Typography sx={{color:'black',height:'28px',fontWeight:'bold',fontSize:'20px',letterSpacing:'0px',marginTop:'3px'}}>Actions</Typography>
           <Box sx={{width:'28px',height:'28px',borderRadius:'50%',backgroundColor:'#101010',marginTop:'4px',marginRight:'250px'}}>
            <Typography sx={{fontSize:'14px',paddingLeft:'5.4px',paddingTop:'3.5px',fontWeight:'bold',color:'white'}}>16</Typography>
           </Box>
        <Box sx={{ width: '320px'}}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Search"
            sx={{width:'370px',  '& .MuiOutlinedInput-root': {
                height: '40px',backgroundColor:'#F2F4F6',marginRight:'100px'
              },
            }}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ display: 'flex', alignItems: 'center' }}>
                    <SearchOutlined sx={{color:'black'}}/>
                  </InputAdornment>
                
                  
                ),
              }}/>

         </Box>
         
         <FormControl size="small" sx={{marginLeft:'150px',marginRight:'10px'}}>
        <Select value={time} onChange={(e) => setTime(e.target.value)}>
          <MenuItem value="To Me">New Card</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{width:'0px',height:'20px',border:'0.2px solid #E4EAEE',marginTop:'9px',marginRight:'10px'}}></Box>
      <RedeemOutlined sx={{marginTop:'7px',marginRight:'10px'}}/>
      <NotificationsOutlined sx={{marginTop:'7px',marginRight:'10px'}}/>
      <Avatar sx={{borderRadius:'12px'}} src={people}></Avatar>
          </Stack>
          
        </Box>
    );
}
export default Appbar;