import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5',
          paddingTop: 2,
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Box sx={{ px: 3, py: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          The King's Restaurant
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Dashboard Owner
        </Typography>
      </Box>

      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="FAQ Page" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
