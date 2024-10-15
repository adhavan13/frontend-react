import { Description, LocalFireDepartment, LogoDev, SettingsOutlined } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import { Box, Stack, width } from "@mui/system";
import React from "react";
import target from '../../assets/target.png';
import hourglass from '../../assets/hourglass.png';
import pop from '../../assets/pop.png';
import chat from '../../assets/chat.png';
import Set from './Settings';

function Sidebar(){
return (
<Box sx={{
    backgroundColor:'#0C084C',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:'23px',
    paddingLeft:'3px',
    paddingRight:'3px',
    boxSizing:'border-box',
    paddingBottom:'12px'
}}>
  <Set/>
     <Avatar sx={{ bgcolor: '#0C084C', width: 46, height: 46, marginBottom: '10px'}}>
        <LogoDev sx={{ fontSize: 32 }} />
      </Avatar>
      <Stack alignItems="center" spacing={0.5} sx={{cursor:'pointer'}}>
        <Avatar sx={{ bgcolor: '#FFFFFF29', width: 35, height: 35 ,borderRadius:'12px','&:hover':{bgcolor:'#00B7A8'}}}>
          <LocalFireDepartment  sx={{width:'20px',height:'20px'}}/>
        </Avatar>
        <Typography sx={{ fontSize: '10px', color: 'white' }}>Actions</Typography>
      </Stack>
      <Stack alignItems="center" spacing={0.5} sx={{cursor:'pointer'}}>
        <Avatar sx={{ bgcolor: '#FFFFFF29', width: 35, height: 35 ,borderRadius:'12px','&:hover':{bgcolor:'#00B7A8'}}}>
          <img src={target} style={{height:'20px',width:'20px'}}></img>
        </Avatar>
        <Typography sx={{ fontSize: '10px', color: 'white' }}>Goals</Typography>
      </Stack>
      <Stack alignItems="center" spacing={0.5} sx={{cursor:'pointer'}}>
        <Avatar sx={{ bgcolor: '#FFFFFF29', width: 35, height: 35 ,borderRadius:'12px','&:hover':{bgcolor:'#00B7A8'}}}>
          <Description sx={{width:'20px',height:'20px'}}/>
        </Avatar>
        <Typography sx={{ fontSize: '10px', color: 'white' }}>Docs</Typography>
      </Stack>
      <Stack alignItems="center" spacing={0.5} sx={{cursor:'pointer'}}>
        <Avatar sx={{ bgcolor: '#FFFFFF29', width: 35, height: 35 ,borderRadius:'12px','&:hover':{bgcolor:'#00B7A8'}}}>
          <img src={hourglass} style={{width:'20px',height:'20px'}}></img>
        </Avatar>
        <Typography sx={{ fontSize: '10px', color: 'white' }}>Canvas</Typography>
      </Stack>
      <Stack alignItems="center" spacing={0.5} sx={{cursor:'pointer'}}>
        <Avatar sx={{ bgcolor: '#FFFFFF29', width: 35, height: 35 ,borderRadius:'12px','&:hover':{bgcolor:'#00B7A8'}}}>
          <img src={pop} style={{width:'20px',height:'20px'}}></img>
        </Avatar>
        <Typography sx={{ fontSize: '10px', color: 'white' }}>Culture</Typography>
      </Stack>
      <Stack alignItems="center" spacing={0.5} sx={{cursor:'pointer'}}>
        <Avatar sx={{ bgcolor: '#FFFFFF29', width: 35, height: 35 ,borderRadius:'12px','&:hover':{bgcolor:'#00B7A8'}}}>
          <img src={chat} style={{width:'20px',height:'20px'}}></img>
        </Avatar>
        <Typography sx={{ fontSize: '10px', color: 'white' }}>Chat</Typography>
      </Stack>
      <Box sx={{width:'30px',paddingTop:'15.5px',borderTop:'1px dashed #FFFFFF3D',marginTop:'50px',paddingBottom:0}}>
      <Stack alignItems="center" spacing={0.5}  sx={{cursor:'pointer'}}>
        <Avatar sx={{ bgcolor: '#FFFFFF29', width: 35, height: 35 ,borderRadius:'12px','&:hover':{bgcolor:'#00B7A8'}}}>
        <SettingsOutlined sx={{width:'20px',height:'20px'}} />
        </Avatar>
        <Typography sx={{ fontSize: '10px', color: 'white' }}>Settings</Typography>
      </Stack>
      </Box>

</Box>

)

}

export default Sidebar;