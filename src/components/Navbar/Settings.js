import { NotificationAddOutlined, NotificationsOutlined } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Switch from '@mui/material/Switch';

function Set(){

    return(
        <Box sx={{width:'290px',height:'100px',position:'absolute',backgroundColor:'grey',left:'70px',top:'545px',borderRadius:'12px',paddingLeft:'10px'}}>
            <Stack gap={0.5}>
                <Box flex={1}>
                    <Stack direction='row' sx={{justifyContent:'center',justifyContent:'space-between'}}>
                  <Box sx={{paddingTop:'13px'}}>
                    <Stack direction='row' >
                    <NotificationsOutlined/>
                    <Typography>Notifications</Typography>
                    </Stack>
                    </Box>
                    <Box sx={{paddingTop:'9px',marginBottom:0,textAlign:'center'}}>
                        <Stack direction='row'>
                        <Box sx={{paddingTop:'5px'}}>
                        <Typography>On</Typography>
                        </Box>
                    <Switch  defaultChecked sx={{margin:0}}/>
                    </Stack>
                    </Box>
                    </Stack>
                </Box>
                <Box sx={{width:"100%",borderTop:'1px dashed #FFFFFF3D'}} flex={1}></Box>
                <Box flex={1}>

                </Box>
            </Stack>
        </Box>
    )
}

export default Set;