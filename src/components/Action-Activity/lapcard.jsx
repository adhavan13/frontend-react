import { Avatar, AvatarGroup, Box, CircularProgress, Grid2, Stack, Typography } from "@mui/material";
import Edit from "./icons/edit.png";
import Alert from "./icons/alert.png"
import Flag from "./icons/flag.png"
import Info from "./icons/info.png"
import Star from "./icons/star.png"
import More from "./icons/more.png"
import Goal from "./icons/goal.png"
import Task from "./icons/task.png"
import FlowChart from "./icons/flowchart.png"
import User from "./icons/user.png"
import SortDown from "./icons/sortdown.png"
import Women1 from "./icons/women1.jpg"
import Women2 from "./icons/women2.jpg"
import Women3 from "./icons/women3.jpg"
import Women4 from "./icons/women4.jpg"
import Time from "./icons/time.png"
import Chat from "./icons/chat.png"
// import '@fontsource/poppins/300.css';
// import '@fontsource/poppins/400.css';
// import '@fontsource/poppins/500.css';
// import '@fontsource/poppins/700.css';

export function LapCard(){
    return(
        <Grid2 sx={{background:"#FFFFFF 0% 0% no-repeat padding-box",borderRadius:"12px", boxShadow:"0px 3px 6px #0000000A",border:"1px solid #E4EAEE"}} >
      <Stack direction="row" spacing={1} padding="12px">
        <Box component="div" sx={{backgroundColor: "#27AE61",borderRadius: "4px",display:"flex",alignItems:"center","&:hover .avatar":{display:"block"}}}>
          <Typography component="div" variant="h6" sx={{fontSize: "10px",  padding: "0px 8px", color: "#FFFFFF",  fontFamily:"Poppins" }}>
            Label</Typography>
            <Avatar className="avatar" src={Edit} sx={{  width: "10px",  height: "10px",padding:"0px 6px 0px 0px ",position:"relative",right:"3px",bottom:"6.5px",display:"none",overflow:"inherit" }}/>
        </Box>
        <Box component="div">
          <Typography
            component="div" variant="h6" sx={{ fontSize: "10px",backgroundColor: "#E74C3C",padding: "0px 4px",borderRadius: "4px",display:"flex",color: "#FFFFFF",alignItems:"center",fontFamily:"Poppins"}}>
            <Avatar src={Alert} sx={{width: "10px",height: "10px",padding: "0px 3px 0.5px 0px",}}/>
            Risk
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" spacing={1} paddingLeft="12px">
        <Typography component="div" variant="h6" sx={{textAlign:"left",fontSize:"10px",letterSpacing:"0px",color:"#535353",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Poppins"}}>Jun 29, 2021 • 8:00 PM</Typography>
        <Box component="div" sx={{display:"flex",alignItems:"center",justifyContent:"center"}}><img src={Flag} style={{background:"#E74C3C14 0% 0% no-repeat padding-box",borderRadius:"100%",width:"9px", height:"10px",padding:"6px"}}/></Box>
        <Box component="div" sx={{background:'#E74C3C14 0% 0% no-repeat padding-box', border:"1px solid #E74C3C",borderRadius:"4px",display:"flex",justifyContent:"center",alignItems:"center",}}><Typography variant="p" component="h5" sx={{fontSize:"10px",color:"#E74C3C",textTransform:"capitalize",font:" normal normal 600 Poppins",padding:"4px 6px"}}>Overdue</Typography></Box>
        <Box flexDirection="row" component="div" sx={{display:"flex", justifyContent:"center",alignItems:"center",paddingLeft:"20px"}}>
            <Avatar src={Info} sx={{width:"14px", height:"14px",paddingRight:"8px"}}/>      
            <Avatar src={Star} sx={{width:"15px", height:"14px",paddingRight:"10px"}}/>
            <Avatar src={More} sx={{width:"14px", height:"14px",paddingRight:"12px"}}/>
        </Box>
      </Stack>
      <Typography variant="h6" paddingLeft="12px" paddingTop="12px" component="div" sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#101010",fontSize:"12px",maxWidth:"242px"}}>Completion of productivity framework design on or before July 7th, 2021.</Typography>
      <Stack direction="row" spacing="4px" padding="12px 0px 0px 12px">
        <Box component="div" sx={{borderRadius:"4px",background:"#C6C6C63D 0% 0% no-repeat padding-box"}}>
        <Typography variant="h6"  sx={{color:"#535353", textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",fontSize:"10px",padding:"4px 8px"}}>5157-Feature</Typography>
        </Box>
        <Box component="div" sx={{borderRadius:"4px",background:"#C6C6C63D 0% 0% no-repeat padding-box"}}>
        <Typography variant="h6" sx={{color:"#535353", textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",fontSize:"10px",display:"flex",padding:"4px 8px"}}>Goal</Typography>
        </Box>
        <Box component="div" sx={{borderRadius:"4px",background:"#C6C6C63D 0% 0% no-repeat padding-box"}}>
        <Typography variant="h6" sx={{color:"#535353", textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",fontSize:"10px",display:"flex",padding:"4px 8px"}}>#Colabo</Typography>
        </Box>
      </Stack>
      <Stack direction="row" padding="12px 0px 0px 12px" spacing={7}>
        <Box component="div" sx={{display:"flex",alignItems:"center",}}>
            <img src={Goal} width="14px" height="14px" />
            <img src={Task} width="14px" height="14px" style={{paddingLeft:"8px"}}/>
            <img src={FlowChart} width="14px" height="14px" style={{paddingLeft:"8px"}}/>
            <Box component="div" sx={{position:"relative",display:"inline-flex", paddingLeft:"8px"}} >
            <CircularProgress variant="determinate" value={100} sx={{maxWidth:"20px",maxHeight:"20px",color:"#E4EAEE",}} thickness={6}/>
            <CircularProgress variant="determinate" value={35} sx={{maxWidth:"20px",maxHeight:"20px",position:"absolute",color:"#2ECC71"}} thickness={6} />
            </Box>
            <Typography variant="h6" component="span" sx={{color:"#8D8D8D", textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",fontSize:"10px",paddingLeft:"8px"}}>35%</Typography>
        </Box>
        <Box component="div" sx={{display:"flex", }}>
            <Typography variant="h6"  sx={{color:"#101010",fontSize:"10px",textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",border:"1px solid #E4EAEE",borderRadius:"6px",display:"flex",alignItems:"center",padding:"3px 6px"}}><Avatar src={User} sx={{paddingRight:"3px",height:'12px',width:'12px'}}/>4</Typography>

            <Typography variant="h6" sx={{display:"flex",alignItems:"center",padding:"4px 8px",border:"1px solid #E4EAEE",borderRadius:"4px",fontSize:"10px",textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#101010",marginLeft:"6px"}} >Pending<Avatar src={SortDown} sx={{paddingLeft:"5px",height:"7px",width:"7px"}}/></Typography>
        </Box>
      </Stack>
      <Typography component="div" sx={{border:"1px dashed #C6C6C699",position:"relative",top:"12px"}}></Typography>
      <Stack direction="row" paddingLeft="12px" paddingTop="24px" spacing={9.3} paddingBottom="8px">
        <Box component="div" sx={{display:"flex",alignItems:"center"}}>
        <AvatarGroup max={3} sx={{"& .MuiAvatar-root":{
            maxHeight:"20px",maxWidth:"20px",fontSize:"10px"
        }}}>
           <Avatar alt="Remy Sharp" src={Women1} sx={{maxHeight:"23px", maxWidth:"23px"}} />
           <Avatar alt="Travis Howard" src={Women2} sx={{maxHeight:"23px", maxWidth:"23px"}} />
           <Avatar alt="Cindy Baker" src={Women3} sx={{maxHeight:"23px", maxWidth:"23px"}}/>
           <Avatar alt="Cindy Baker" src={Women4} sx={{maxHeight:"23px", maxWidth:"23px"}} />
        </AvatarGroup>
        <Typography component="div" variant="h6" sx={{color:"#535353", textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",fontSize:"10px",display:"flex",alignItems:"center"}}><Avatar src={Time}  sx={{paddingLeft:"8px",paddingRight:"3px",width:"11px", height:"12px"}}/>Est. 2h 30 m</Typography>
        </Box>
        <Typography component="div" variant="h6" sx={{color:"#535353", textAlign:"right ",fontFamily:"Poppins",letterSpacing:"0px",fontSize:"10px",paddingLeft:"8px",display:"flex",alignItems:"center"}}>Discuss<Box component="div" sx={{paddingLeft:"8px",display:"flex",alignItems:"center"}} ><Avatar src={Chat}  sx={{border:"1px dashed #00B7A8",borderRadius:"100%",padding:"5.34px",width:"12px", height:"12px"}}/></Box></Typography>
      </Stack>
    </Grid2>
    )
}