import { Height } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { bgcolor, Box, Stack } from "@mui/system";
import React, { useState } from "react";
import Set from './Settings';

function Config(){
    const [men,setmen]=useState(false);
     return(
        <Box sx={{position:'absolute',paddingRight:'61.05px',width:'200px',Height:'93px',bgcolor:'#FFFFFF',left:'299px',bottom:'-20px',paddingLeft:'16.34px',paddingTop:'16px',borderRadius:'12px',paddingBottom:'15.63px',border: '1px solid #E4EAEE',boxShadow: '0px 25px 50px #0000003D'}}>
            <Stack gap='23.18px' onMouseOver={()=>setmen(false)}>
                <Typography sx={{fontSize:'14px',color:'#535353'}}>Master Setup</Typography>
                <Typography sx={{fontSize:'14px',color:'#535353'}}>User Management</Typography>
                <Typography sx={{fontSize:'14px',color:'#535353'}}>General Master Workflow</Typography>
            </Stack>
            <Set men={men}/>
        </Box>
     )

}
export default Config;