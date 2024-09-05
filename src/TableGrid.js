
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Card, Chip } from '@mui/material';
import Grid from "@mui/material/Grid2"
import { SparkLineChart } from '@mui/x-charts';

// Define columns
const settings = {
  valueFormatter: (v) => `${v}%`,
  height: 20,
  showTooltip: true,
  showHighlight: true,
};

const columns = [
  { field: 'pageTitle', headerName: 'Page Title', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    renderCell: (params) => {
      return params.value === 'Online' ? (
        <Chip label="Online" color="success" size="small" variant="outlined" />
      ) : (
        <Chip label="Offline" color="default" size="small" variant="outlined" />
      );
    },
  },
  { field: 'users', headerName: 'Users', type: 'number', width: 150, renderCell: (params) => {
    let value = params.value+""
    if(params.value > 58240){
      return <SparkLineChart data={[...value.split("")]} colors={['green']} {...settings} />
    }else{
      return <SparkLineChart data={[...value.split("")]} colors={['red']} {...settings} />
    }
  }, },
  { field: 'eventCount', headerName: 'Event Count', type: 'number', width: 150 },
  { field: 'viewsPerUser', headerName: 'Views per User', type: 'number', width: 150 },
  // { field: 'averageTime', headerName: 'Average Time', width: 150 },
  // { field: 'dailyConversions', headerName: 'Daily Conversions', type: 'number', width: 200 },
];

// Convert data
const rows = [
  { id: 1, pageTitle: 'Homepage Overview', status: 'Online', users: 212423, eventCount: 8345, viewsPerUser: 18.5, averageTime: '2m 15s', dailyConversions: 0 },
  { id: 2, pageTitle: 'Product Details - Gadgets', status: 'Online', users: 172240, eventCount: 5653, viewsPerUser: 9.7, averageTime: '2m 30s', dailyConversions: 0 },
  { id: 3, pageTitle: 'Checkout Process - Step 1', status: 'Offline', users: 58240, eventCount: 3455, viewsPerUser: 15.2, averageTime: '2m 10s', dailyConversions: 0 },
  { id: 4, pageTitle: 'User Profile Dashboard', status: 'Online', users: 96240, eventCount: 112543, viewsPerUser: 4.5, averageTime: '2m 40s', dailyConversions: 0 },
  { id: 5, pageTitle: 'Article Listing - Tech News', status: 'Offline', users: 142240, eventCount: 3653, viewsPerUser: 3.1, averageTime: '2m 55s', dailyConversions: 0 },
  { id: 6, pageTitle: 'FAQs - Customer Support', status: 'Online', users: 15240, eventCount: 106543, viewsPerUser: 7.2, averageTime: '2m 20s', dailyConversions: 0 },
  { id: 7, pageTitle: 'Product Comparison - Laptops', status: 'Offline', users: 32240, eventCount: 7853, viewsPerUser: 6.5, averageTime: '2m 50s', dailyConversions: 0 },
  { id: 8, pageTitle: 'Shopping Cart - Electronics', status: 'Online', users: 48240, eventCount: 8563, viewsPerUser: 4.3, averageTime: '3m 10s', dailyConversions: 0 },
  { id: 9, pageTitle: 'Payment Confirmation - Bank Transfer', status: 'Offline', users: 18240, eventCount: 4563, viewsPerUser: 2.7, averageTime: '3m 25s', dailyConversions: 0 },
  { id: 10, pageTitle: 'Product Reviews - Smartphones', status: 'Online', users: 28240, eventCount: 9863, viewsPerUser: 5.1, averageTime: '3m 05s', dailyConversions: 0 },
  { id: 11, pageTitle: 'Subscription Management - Services', status: 'Offline', users: 24240, eventCount: 6563, viewsPerUser: 4.8, averageTime: '3m 15s', dailyConversions: 0 },
  { id: 12, pageTitle: 'Order Tracking - Shipments', status: 'Online', users: 38240, eventCount: 12353, viewsPerUser: 3.5, averageTime: '3m 20s', dailyConversions: 0 },
  { id: 13, pageTitle: 'Customer Feedback - Surveys', status: 'Offline', users: 13240, eventCount: 5863, viewsPerUser: 2.3, averageTime: '3m 30s', dailyConversions: 0 },
  { id: 14, pageTitle: 'Account Settings - Preferences', status: 'Online', users: 18240, eventCount: 7853, viewsPerUser: 3.2, averageTime: '3m 15s', dailyConversions: 0 },
  { id: 15, pageTitle: 'Login Page - Authentication', status: 'Offline', users: 24240, eventCount: 9563, viewsPerUser: 2.5, averageTime: '3m 35s', dailyConversions: 0 },
  { id: 16, pageTitle: 'Promotions - Seasonal Sales', status: 'Online', users: 54230, eventCount: 13423, viewsPerUser: 7.8, averageTime: '2m 45s', dailyConversions: 0 },
  { id: 17, pageTitle: 'Tutorials - How to Guides', status: 'Offline', users: 19342, eventCount: 4234, viewsPerUser: 5.2, averageTime: '3m 05s', dailyConversions: 0 },
  { id: 18, pageTitle: 'Blog Posts - Tech Insights', status: 'Online', users: 34234, eventCount: 8567, viewsPerUser: 6.3, averageTime: '2m 50s', dailyConversions: 0 },
  { id: 19, pageTitle: 'Events - Webinars', status: 'Offline', users: 19234, eventCount: 3456, viewsPerUser: 4.5, averageTime: '3m 20s', dailyConversions: 0 },
  { id: 20, pageTitle: 'Support - Contact Us', status: 'Online', users: 27645, eventCount: 6734, viewsPerUser: 3.9, averageTime: '2m 55s', dailyConversions: 0 },
  { id: 21, pageTitle: 'Product Launch - Smartphones', status: 'Online', users: 25340, eventCount: 7830, viewsPerUser: 8.3, averageTime: '2m 25s', dailyConversions: 0 },
  { id: 22, pageTitle: 'Service Update - Notifications', status: 'Offline', users: 11790, eventCount: 2365, viewsPerUser: 7.4, averageTime: '2m 50s', dailyConversions: 0 },
  { id: 23, pageTitle: 'Marketing Campaign - Winter Sale', status: 'Online', users: 31240, eventCount: 9674, viewsPerUser: 10.1, averageTime: '3m 10s', dailyConversions: 0 },
  { id: 24, pageTitle: 'Feature Release - New UI', status: 'Offline', users: 20350, eventCount: 6458, viewsPerUser: 6.7, averageTime: '3m 05s', dailyConversions: 0 },
  { id: 25, pageTitle: 'Customer Survey - Satisfaction', status: 'Online', users: 14230, eventCount: 4385, viewsPerUser: 5.8, averageTime: '2m 45s', dailyConversions: 0 },
  { id: 26, pageTitle: 'Webinar - Industry Trends', status: 'Offline', users: 22340, eventCount: 6543, viewsPerUser: 4.9, averageTime: '3m 30s', dailyConversions: 0 },
  { id: 27, pageTitle: 'E-commerce Trends - 2024', status: 'Online', users: 36540, eventCount: 9842, viewsPerUser: 9.2, averageTime: '2m 55s', dailyConversions: 0 },
  { id: 28, pageTitle: 'Security Update - Patch 5', status: 'Offline', users: 28430, eventCount: 6789, viewsPerUser: 7.6, averageTime: '3m 00s', dailyConversions: 0 },
  { id: 29, pageTitle: 'Newsletter - September Issue', status: 'Online', users: 19430, eventCount: 8721, viewsPerUser: 5.9, averageTime: '2m 35s', dailyConversions: 0 },
  { id: 30, pageTitle: 'Customer Retention - Strategies', status: 'Offline', users: 35420, eventCount: 7698, viewsPerUser: 6.4, averageTime: '3m 20s', dailyConversions: 0 },
  { id: 31, pageTitle: 'Website Redesign - Launch', status: 'Online', users: 27420, eventCount: 8990, viewsPerUser: 7.1, averageTime: '2m 50s', dailyConversions: 0 },
  { id: 32, pageTitle: 'New Feature - User Profiles', status: 'Offline', users: 16730, eventCount: 4589, viewsPerUser: 8.0, averageTime: '3m 10s', dailyConversions: 0 },
  { id: 33, pageTitle: 'Event Recap - Annual Meetup', status: 'Online', users: 49230, eventCount: 11234, viewsPerUser: 10.5, averageTime: '2m 30s', dailyConversions: 0 },
  { id: 34, pageTitle: 'Mobile App Update', status: 'Offline', users: 29140, eventCount: 7890, viewsPerUser: 6.8, averageTime: '3m 15s', dailyConversions: 0 },
  { id: 35, pageTitle: 'Product Comparison - Tablets', status: 'Online', users: 18940, eventCount: 6789, viewsPerUser: 7.4, averageTime: '2m 55s', dailyConversions: 0 },
  { id: 36, pageTitle: 'Tech Conference - 2024', status: 'Offline', users: 31240, eventCount: 8321, viewsPerUser: 9.0, averageTime: '3m 05s', dailyConversions: 0 },
  { id: 37, pageTitle: 'Customer Testimonials', status: 'Online', users: 27540, eventCount: 9054, viewsPerUser: 6.9, averageTime: '2m 40s', dailyConversions: 0 },
  { id: 38, pageTitle: 'User Experience Survey', status: 'Offline', users: 23450, eventCount: 3456, viewsPerUser: 5.7, averageTime: '3m 20s', dailyConversions: 0 },
  { id: 39, pageTitle: 'Sales Report - Q3 2024', status: 'Online', users: 40120, eventCount: 7432, viewsPerUser: 8.9, averageTime: '2m 25s', dailyConversions: 0 },
  { id: 40, pageTitle: 'Product Reviews - Laptops', status: 'Offline', users: 26430, eventCount: 6543, viewsPerUser: 6.2, averageTime: '3m 10s', dailyConversions: 0 },
  { id: 41, pageTitle: 'Feature Update - Dashboard', status: 'Online', users: 39120, eventCount: 8645, viewsPerUser: 7.5, averageTime: '2m 50s', dailyConversions: 0 },
  { id: 42, pageTitle: 'Customer Service - New Policies', status: 'Offline', users: 18320, eventCount: 2567, viewsPerUser: 4.8, averageTime: '3m 35s', dailyConversions: 0 },
  { id: 43, pageTitle: 'Weekly Digest - Highlights', status: 'Online', users: 22930, eventCount: 7543, viewsPerUser: 6.1, averageTime: '2m 30s', dailyConversions: 0 },
  { id: 44, pageTitle: 'Product Training - Videos', status: 'Offline', users: 13420, eventCount: 5678, viewsPerUser: 5.3, averageTime: '3m 20s', dailyConversions: 0 },
  { id: 45, pageTitle: 'Service Feedback - Post-Launch', status: 'Online', users: 18630, eventCount: 4321, viewsPerUser: 7.8, averageTime: '2m 40s', dailyConversions: 0 },
  { id: 46, pageTitle: 'Marketing Strategies - 2024', status: 'Offline', users: 27740, eventCount: 9876, viewsPerUser: 6.5, averageTime: '3m 15s', dailyConversions: 0 },
  { id: 47, pageTitle: 'Customer Success Stories', status: 'Online', users: 39540, eventCount: 6432, viewsPerUser: 8.4, averageTime: '2m 55s', dailyConversions: 0 },
  { id: 48, pageTitle: 'Product Overview - New Features', status: 'Offline', users: 26130, eventCount: 7543, viewsPerUser: 6.9, averageTime: '3m 00s', dailyConversions: 0 },
  { id: 49, pageTitle: 'Company News - Q3 2024', status: 'Online', users: 34230, eventCount: 8654, viewsPerUser: 7.2, averageTime: '2m 45s', dailyConversions: 0 },
  { id: 50, pageTitle: 'Customer Engagement - Metrics', status: 'Offline', users: 17540, eventCount: 2345, viewsPerUser: 5.6, averageTime: '3m 25s', dailyConversions: 0 }
];

export default function TableGrid() {
  return (
    <Grid size="4">
      <Card variant="outlined">
        <Box sx={{ width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Card>
    </Grid>
  );
}