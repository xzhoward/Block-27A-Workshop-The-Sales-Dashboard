import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import RevenueChart from './RevenueChart';
import Transactions from './Transactions';

const Dashboard = () => {
  return (
    <Box>
      {/* Stat Boxes */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Sales</Typography>
              <Typography variant="h4">$271,434.63</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">New Clients</Typography>
              <Typography variant="h4">1,245</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Traffic</Typography>
              <Typography variant="h4">4,657</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Revenue Chart */}
      <Box mb={3}>
        <Typography variant="h6" gutterBottom>
          Revenue Generated
        </Typography>
        <RevenueChart />
      </Box>

      {/* Transaction Log */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Recent Transactions
        </Typography>
        <Transactions />
      </Box>
    </Box>
  );
};

export default Dashboard;
