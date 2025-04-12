import React from 'react';
import { Box, Typography, Stack, LinearProgress } from '@mui/material';

const data = [
  { month: 'Jan', value: 4000 },
  { month: 'Feb', value: 3000 },
  { month: 'Mar', value: 5000 },
  { month: 'Apr', value: 4200 },
];

const max = Math.max(...data.map(d => d.value));

const RevenueChart = () => {
  return (
    <Box>
      {data.map((item) => (
        <Box key={item.month} mb={1}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2">{item.month}</Typography>
            <Typography variant="body2">${item.value}</Typography>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={(item.value / max) * 100}
            sx={{ height: 10, borderRadius: 5 }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default RevenueChart;
