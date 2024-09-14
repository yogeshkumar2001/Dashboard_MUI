import React from 'react'
import Grid from '@mui/material/Grid';
import { Box, ListItem, Stack, Typography } from '@mui/material'
import SummaryCard from './SummaryCard';
import ChartCard from './ChartCard';
import TableGrid from './TableGrid';
import BasicLegend from "./HeatMap.js"
import PieChartWithPaddingAngle from "./Pie.js"
import StackedBarChart from './StackedBarChart.js';
import SummaryCard2 from './SummaryCard2.js';

function DashBoardGrid() {
    return (
        <Grid container direction={"column"} rowSpacing={2} spacing={2} sx={{ flexGrow: 1, mt: 2 }}>
            <Grid><Typography sx={{ typography: "h6", mb: 1 }}>GDP Overview</Typography></Grid>
            <Grid container spacing={2} rowSpacing={2} mb={2}>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <SummaryCard heading={"India"} text1={"$3.7 trillion"} text2={"+7.7%"} text3={"last 2 years"} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <SummaryCard heading={"United States"} text1={"$26.5 trillion"} text2={"-2.1%"} text3={"last 5 years"} down={true} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <SummaryCard heading={"China"} text1={"$19.7 trillion"} text2={"+4.5%"} text3={"last year"} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3} mb={2}>
                    <SummaryCard2 heading={"Explore your data"} text1={"$3.7 trillion"} text2={"+6.7%"} text3={"Uncover GDP and population insights with our data wizardry."} />
                </Grid>
            </Grid>
            <Grid container spacing={2} rowSpacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                    <ChartCard />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} mb={2} >
                    <StackedBarChart />
                </Grid>
                {/* </Grid> */}
            </Grid>
            <Grid container spacing={2} rowSpacing={2} >
                <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                    <TableGrid />
                </Grid>
            </Grid>
            <Grid container spacing={2} rowSpacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <BasicLegend />

                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <PieChartWithPaddingAngle />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <BasicLegend />

                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <PieChartWithPaddingAngle />
                </Grid>
            </Grid>


        </Grid>

    )
}

export default DashBoardGrid