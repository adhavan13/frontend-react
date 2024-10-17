import { Box, Stack } from "@mui/material";
import Sidebar from './components/Navbar/Navbar';
import Layout from './components/Layout';
import Appbar from './components/Appbar';
import Action from './components/Action-Activity/action';
import { WidthFull } from "@mui/icons-material";
import ActionsToolbar from "./components/Appbar2";
function App() {
  return (
    <Box sx={{margin:0,padding:0}}>
      <Stack direction="row">
        <Action/>
      <Sidebar/>
      <Appbar/>
      <ActionsToolbar/>
      </Stack>
       
    </Box>
  );
}

export default App;
