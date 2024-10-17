import styled from "@emotion/styled";
import { Grid2, } from "@mui/material";
// import '@fontsource/poppins/300.css';
// import '@fontsource/poppins/400.css';
// import '@fontsource/poppins/500.css';
// import '@fontsource/poppins/700.css';
import { LapCard } from "./lapcard";
import { MobCard } from "./mobcard";


export const Grid = styled(Grid2)({
  opacity: "1",
  font:"Poppins",
});
export default function Action() {
  return (
  <Grid container sx={{background:"#253B6E0A 0% 0% no-repeat padding-box",justifyContent:"center",position:'absolute',left:'50px',top:'140px'}}>
    <Grid sx={{display:{sm:'block',xs:'none',margin:"12px",}}}>
      <Grid rowGap="12px" columnGap="12px"  sx={{display:"grid",gridTemplateColumns:'repeat(4,1fr)'}}>
    <LapCard/>
    <LapCard/>
    <LapCard/>
    <LapCard/>
    <LapCard/>
    <LapCard/>
    <LapCard/>
    <LapCard/>
    <LapCard/>
    <LapCard/>
    <LapCard/>
    <LapCard/>
    <LapCard/>
    </Grid>
    </Grid>
    <Grid sx={{display:{sm:'none',xs:'block'},margin:"16px"}}>
      <Grid sx={{display:"grid",rowGap:"12px"}}>
    <MobCard/>
    <MobCard/>
    <MobCard/>
    <MobCard/>
    </Grid>
    </Grid>
  </Grid>
  );
}
