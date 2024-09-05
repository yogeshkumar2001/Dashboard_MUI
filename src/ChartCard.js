import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Chip, ListItem, Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import LineChart from './LineChartDemo';

const settings = {
    valueFormatter: (v) => `${v}%`,
    height: 50,
    showTooltip: true,
    showHighlight: true,
};

const smallValues = [0, 2, 3, 4, 6, 8, 7, 9, 15, 6, 8, 7, 12];
const largeValues = [60, 65, 66, 68, 87, 82, 83, 89, 92, 75, 76, 77, 91];
const card = (
    <React.Fragment>
        <CardContent>

            <Typography sx={{ typography: "body2" }} component="div">
                User
            </Typography>
            <Stack direction="row" spacing={2}><Box component="span" sx={{ display: 'inline', typography: "h5", fontWeight: 500 }}>13327</Box>  <Chip sx={{ size: "small", height: 20 }} label="+25%" color="success" /></Stack>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Sessions per day for the last 30 days</Typography>
            <LineChart />
        </CardContent>

    </React.Fragment>
);

export default function ChartCard() {
    return (
        <Grid size={6}>
            <Card variant="outlined">{card}</Card>
        </Grid>
    );
}
