import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Grid from '@mui/material/Grid2';
import { Box, Chip, Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'India',
    'Brazil',
    'USA',
    'China',
    'France',
    'Russia',
    'Japan',
];
const card = (
    <React.Fragment>
        <CardContent>

            <Typography sx={{ typography: "body2" }} component="div">
                User
            </Typography>
            <Stack direction="row" spacing={2}><Box component="span" sx={{ display: 'inline', typography: "h5", fontWeight: 500 }}>13327</Box>  <Chip sx={{ size: "small", height: 20 }} label="+25%" color="success" /></Stack>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Sessions per day for the last 30 days</Typography>
            <BarChart
                width={600}
                height={300}
                series={[
                    { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
                    { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
            />
        </CardContent>

    </React.Fragment>
);
export default function StackedBarChart() {
    return (
        <Grid size={6}>
            <Card variant="outlined">{card}</Card>
        </Grid>
    );
}
