import React from 'react'
import Grid from '@mui/material/Grid2';
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
        <Stack spacing={2} sx={{ flexGrow: 1, mt: 2 }}>
            <Typography sx={{ typography: "h6", mb: 1 }}>GDP Overview</Typography>
            <Grid container spacing={2}>
                {/* <Grid item direction="row"  sx={{ h: 20 }}> */}
                <SummaryCard heading={"India"} text1={"$3.7 trillion"} text2={"+7.7%"} text3={"last 2 years"} />
                <SummaryCard heading={"United States"} text1={"$26.5 trillion"} text2={"- 2.1%"} text3={"last 5 years"} down={true} />
                <SummaryCard heading={"China"} text1={"$19.7 trillion"} text2={"+4.5%"} text3={"last years"} />
                <SummaryCard2 heading={"Explore your data"} text1={"$3.7 trillion"} text2={"+6.7%"} text3={"Uncover Gdp and population insights with our data wizardry."} />
                {/* </Grid> */}
            </Grid>
            <Grid container spacing={2}>
                {/* <Grid item direction="row"  sx={{ h: 20 }}> */}
                <ChartCard />
                <StackedBarChart />
                {/* </Grid> */}
            </Grid>
            <Grid container spacing={2}>
                {/* <Grid item direction="row"  sx={{ h: 20 }}> */}
                <TableGrid />
                {/* </Grid> */}
                <Grid size={3}>
                    <Stack spacing={2} direction={"column"}>
                        <BasicLegend />
                        <PieChartWithPaddingAngle />
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default DashBoardGrid