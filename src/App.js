import { Box, Stack } from "@mui/material";
import Sidebar from './components/Navbar/Navbar';
import Layout from './components/Layout';

function App() {
  return (
    <Box sx={{margin:0,padding:0}}>
      <Stack direction="row">
      <Sidebar/>
      <Layout/>
      </Stack>
    </Box>
  );
}

export default App;
