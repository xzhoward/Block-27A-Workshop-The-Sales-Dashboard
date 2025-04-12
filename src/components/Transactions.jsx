import React from 'react';
import { Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import { mockTransactions } from '../data/mockData';

const Transactions = () => {
  return (
    <Box
      sx={{
        maxHeight: 250,
        overflowY: 'auto',
        border: '1px solid #ccc',
        borderRadius: 2,
        p: 1,
      }}
    >
      <List>
        {mockTransactions.map((tx, idx) => (
          <Box key={idx}>
            <ListItem>
              <ListItemText
                primary={`User: ${tx.user}`}
                secondary={`Date: ${tx.date} | Cost: $${tx.cost}`}
              />
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Transactions;
