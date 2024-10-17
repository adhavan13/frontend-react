
import Flag from "./icons/flag.png"
import Info from "./icons/info.png"
import Star from "./icons/star.png"
import Task from "./icons/task.png"
import User from "./icons/user.png"
import SortDown from "./icons/sortdown.png"
import BookMark from "./icons/bookmark.png"
// import '@fontsource/poppins/300.css';
// import '@fontsource/poppins/400.css';
// import '@fontsource/poppins/500.css';
// import '@fontsource/poppins/700.css';
import { Avatar, Box, CircularProgress, Divider, Grid2, Typography } from "@mui/material"

export function MobCard(){
    return(
        <Grid2  sx={{background:"#FFFFFF 0% 0% no-repeat padding-box",borderRadius:"12px", boxShadow:"0px 3px 6px #0000000A",border:"1px solid #E4EAEE",}}>
      <Box sx={{padding:"16px"}}>
      <Box sx={{display:"flex",alignItems:"center"}}>
        <Typography component="div" variant="h6" sx={{color:"#8D8D8D",textAlign:"left",fontSize:"14px",fontFamily:"Poppins",letterSpacing:"0px"}}>001-bug | #Colabo</Typography>
        <Box sx={{display:"flex",flexDirection:"row",paddingLeft:"155px"}}>
          <Avatar src={Info} sx={{height:"14px",width:"14px"}}/>
          <Avatar src={Star} sx={{height:"14px",width:"14px",paddingLeft:"8px "}}/>
        </Box>
      </Box>
      <Typography component="div"  sx={{padding:"16px 0px 0px 0px",fontSize:"16px",fontFamily:"Poppins",textAlign:"left",color:"#101010",letterSpacing:"0px",maxWidth:"328px",fontWeight:"500"}}>Sed ut perspiciatis unde omnis istenate error sit voluptatem accusantium</Typography>
      <Box sx={{display:"flex",alignItems:"center",paddingTop:"8px"}}>
      <Avatar src={Flag} sx={{height:"14px",width:"14px"}}/>
      <Typography component="div" variant="h6" sx={{fontSize:"14px",fontFamily:"Poppins",textAlign:"left",color:"#535353",display:"flex",paddingLeft:"8px"}}>Jun 29, 2021 • 8:00 PM | &nbsp;<Typography variant="h6" sx={{color:"#E74C3C",fontSize:"14px",fontFamily:"Poppins"}}>Overdue</Typography></Typography>
      </Box>
      <Box sx={{display:"flex",paddingTop:"24px"}}>
        <Box component="div" sx={{position:"relative",display:"inline-flex", }} >
            <CircularProgress variant="determinate" value={100} sx={{maxWidth:"34px",maxHeight:"34px",color:"#E4EAEE",}} thickness={4}/>
            <CircularProgress variant="determinate" value={35} sx={{maxWidth:"34px",maxHeight:"34px",position:"absolute",color:"#2ECC71"}} thickness={4} />
            <Typography variant="h6" component="span" sx={{color:"#8D8D8D",fontFamily:"Poppins",letterSpacing:"0px",fontSize:"10px",position:"absolute",padding:"9px 0px 0px 7px"}}>35%</Typography>
        </Box>
        <Box sx={{display:"flex",padding:"0px 0px 0px 8px"}}>
        <Typography variant="h6"  sx={{color:"#101010",fontSize:"12px",textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",border:"1px solid #E4EAEE",borderTopLeftRadius:"6px",borderBottomLeftRadius:"6px",display:"flex",alignItems:"center",padding:"3px 6px"}}><Avatar src={User} sx={{paddingRight:"3px",height:'14px',width:'14px'}}/>4</Typography>
        <Typography variant="h6"  sx={{color:"#101010",fontSize:"12px",textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",border:"1px solid #E4EAEE",borderTopRightRadius:"6px",borderBottomRightRadius:"6px",display:"flex",alignItems:"center",padding:"3px 6px"}}><Avatar src={Task} sx={{paddingRight:"3px",height:'14px',width:'14px'}}/>2</Typography>
        </Box>
        <Box sx={{padding:"0px 0px 0px 126px"}}>
          <Box sx={{display:"flex",alignItems:"center",borderRadius:"4px",backgroundColor:"#1089FF14",}}>
          <Avatar src={BookMark} sx={{height:"12px",width:"12px",padding:"9px 0px 9px 12px"}}/>
          <Typography component="div" variant="h6" sx={{fontFamily:"Poppins",fontSize:"10px",textAlign:"left",color:"#1089FF",padding:"9px 12px 9px 8px"}}>Colabo</Typography>
        </Box>
        </Box>
      </Box>
      </Box>
      <Divider sx={{borderStyle:"dashed"}}/>
      <Box sx={{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Typography sx={{fontSize:"12px",fontFamily:"Poppins",color:"#535353"}}>Est. 2h30m | Act. ETA 4hrs</Typography>
        <Typography variant="h6" sx={{display:"flex",alignItems:"center",padding:"4px 8px 4px 8px",border:"1px solid #E4EAEE",borderRadius:"4px",fontSize:"12px",textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#101010",marginLeft:"0px"}} >Pending<Avatar src={SortDown} sx={{paddingLeft:"3px",height:"5px",width:"10px"}}/></Typography>
      </Box>
    </Grid2>
    )
}