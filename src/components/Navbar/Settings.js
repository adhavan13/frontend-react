import { NotificationAddOutlined, NotificationsOutlined } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Switch from '@mui/material/Switch';
import wrench from '../../assets/wrench.png';
import Sidebar from './Navbar';
import arrow from '../../assets/arrow.png';
import Config from './Config';

function Set({men}){
  const [config,setconfig]=useState(false);
  const [menu,setmenu]=useState(false);
  const [rend,setrend]=useState(false);


    return(
        <Box sx={{width:'290px',height:'100px',position:'absolute',backgroundColor:'#FFFFFF',left:'70px',top:'545px',borderRadius:'12px',paddingLeft:'12.5px',boxShadow: '0px 25px 50px #00000066',border: '1px solid #E4EAEE'}}>
            <Box sx={{width:'20px',height:'20px',position:'absolute',backgroundColor:'red',transform:'rotate(45deg)',bottom:'6px',left:'-3px',bgcolor:'whitesmoke'}}>
                 
            </Box>
            <Stack gap={0.5}>
                <Box flex={1} sx={{cursor:'pointer'}}>
                    <Stack direction='row' sx={{justifyContent:'center',justifyContent:'space-between'}}>
                  <Box sx={{paddingTop:'13px'}}>
                    <Stack direction='row' gap='7px'>
                    <NotificationsOutlined sx={{color:'#535353'}} />
                    <Typography sx={{color:'#535353',fontSize:'14px',marginTop:'2px'}}>Notifications</Typography>
                    </Stack>
                    </Box>

                    <Box sx={{paddingTop:'6px',marginBottom:0,textAlign:'center'}}>
                        <Stack direction='row'>
                        <Box sx={{paddingTop:'11px'}}>
                        <Typography sx={{color:'#535353',fontSize:'10px'}}>ON</Typography>
                        </Box>
                    <Switch  defaultChecked sx={{margin:0}}/>
                    </Stack>
                    </Box>
                    </Stack>
                </Box>

                <Box sx={{width:"95%",borderTop:'1px dashed lightgrey'}} flex={1}></Box>
                <Box flex={1} sx={{cursor:'pointer'}} onMouseOver={()=>setmenu(true)} onMouseOut={()=>setmenu(false)}>
                    <Stack direction='row' sx={{justifyContent:'space-between'}}>
                        <Stack direction='row' gap='7px' marginTop='7px'>
                        <img src={wrench} style={{width:'23px',height:'23px',color:'#535353'}}></img>
                        <Typography sx={{color:'#535353',fontSize:'14px',marginTop:'2px'}}>Configurations</Typography>
                        </Stack>
                        <Box sx={{backgroundColor:'grey',height:'15px',width:'15px',borderRadius:'50%',position:'absolute',right:'20px',bottom:'18px'}}>
                        <img src={arrow} style={{width:'20px',height:'20px',color:'#535353',position:'absolute',right:'-1.5px',bottom:'-1px'}} ></img>
                        </Box>
                    </Stack>
                    {config && <Sidebar config={config}/>}
                    {menu && <Config/>}
                </Box>
            </Stack>
           
        

        </Box>
    )
}

export default Set;