import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box, Chip, ListItem, Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';



export default function SummaryCard2(props) {
    const settings = {
        valueFormatter: (v) => `${v}%`,
        height: 50,
        showTooltip: true,
        showHighlight: true,
    };

    const smallValues = [15, 6, 8, 7, 12, 0, 2, 3, 4, 6, 8, 7, 9,];
    const largeValues = [60, 65, 66, 68, 87, 82, 83, 89, 92, 75, 76, 77, 91];
    const card = (
        <React.Fragment>
            <CardContent>

                <Typography sx={{ typography: "body2" }} component="div">
                    {props.heading}
                </Typography>
                {/* <Stack direction="row" sx={{ justifyContent: 'space-between' }}><Box component="span" sx={{ display: 'inline', typography: "h5", fontWeight: 500 }}>{props.text1}</Box></Stack> */}
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{props.text3}</Typography>
                {/* <SparkLineChart data={props.down ? smallValues : largeValues} colors={props.down ? ['red'] : ['green']} {...settings} /> */}
                <Button variant='light' >Explore more data</Button>

            </CardContent>

        </React.Fragment>
    );
    return (
        <Grid size={3}>
            <Card variant="outlined">{card}</Card>
        </Grid>
    );
}
