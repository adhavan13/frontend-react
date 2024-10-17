import React from 'react';
import {
  Box, TextField, ToggleButton, ToggleButtonGroup,
  FormControl, Select, MenuItem, Avatar, Switch, Typography
} from '@mui/material';


const ActionsToolbar = () => {
  const [time, setTime] = React.useState('Today');
  const [type, setType] = React.useState('To Me');
  const [status, setStatus] = React.useState('Open');
  const [starred, setStarred] = React.useState(true);
  const [me,setmine]=React.useState('card');

  return (
    <Box display="flex" alignItems="center" p={2} sx={{ gap: 2 }} sx={{position:'absolute',left:'50px',top:'60px',boxShadow:'0px 2px 2px #00000014',width:'1127px'}}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search by Number/Title"
        sx={{ flexGrow: 1 }}
      />

      <FormControl size="small" sx={{marginRight:'40px',marginLeft:'40px'}}>
        <Select value={time} onChange={(e) => setTime(e.target.value)}>
          <MenuItem value="Today" >Today</MenuItem>
          <MenuItem value="This Week">This Week</MenuItem>
          <MenuItem value="This Month">This Month</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small" sx={{marginRight:'40px'}}>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="To Me">To Me</MenuItem>
          <MenuItem value="All">All</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small" sx={{marginRight:'40px'}}>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <MenuItem value="Open">Open</MenuItem>
          <MenuItem value="Closed">Closed</MenuItem>
        </Select>
      </FormControl>

      <ToggleButtonGroup value={starred ? 'starred' : ''} exclusive sx={{marginRight:'40px'}}>
        <ToggleButton onClick={() => setStarred(!starred)} value="starred">
          Starred
        </ToggleButton>
      </ToggleButtonGroup>

      <Box display="flex" alignItems="center" sx={{ gap: 1 ,marginRight:'40px'}}>
        <Typography sx={{color:'grey'}}>Deep Filters</Typography>
        <Switch />
      </Box>

      <FormControl size="small" sx={{marginRight:'40px'}}>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="card">Card</MenuItem>
        </Select>
      </FormControl>

      <Avatar>N</Avatar>
    </Box>
  );
};

export default ActionsToolbar;