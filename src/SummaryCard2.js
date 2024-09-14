import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Chip, ListItem, Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TimelineIcon from '@mui/icons-material/Timeline';


export default function SummaryCard2(props) {


    const card = (
        <React.Fragment>
            <CardContent>
                <TimelineIcon fontSize="small" />
                <Typography sx={{ typography: "body2", fontWeight: 700 }} component="div">
                    {props.heading}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 0.9 }}>{props.text3}</Typography>
                <Button variant="contained" sx={{ backgroundColor: "white", color: "black" }} >Get Insights</Button>

            </CardContent>

        </React.Fragment>
    );
    return (
        // <Grid item lg={3}>
        <Card variant="outlined" sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}> {card}</Card>
        // </Grid>
    );
}
