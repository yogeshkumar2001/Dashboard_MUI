import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Grid from '@mui/material/Grid2';
import { Box, Chip, Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function StackedBarChart() {
    const [isMobile, setIsMobile] = React.useState(window.matchMedia("(max-width: 600px)").matches);

    React.useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 600px)");
  
      // Define a listener to update state on screen resize
      const handleResize = (event) => {
        setIsMobile(event.matches);
      };
  
      // Attach listener
      mediaQuery.addEventListener("change", handleResize);
  
      // Clean up listener on component unmount
      return () => {
        mediaQuery.removeEventListener("change", handleResize);
      };
    }, []);
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
            <CardContent sx={{width: "100%" }}>

                <Typography sx={{ typography: "body2" }} component="div">
                    User
                </Typography>
                <Stack direction="row" spacing={2}><Box component="span" sx={{ display: 'inline', typography: "h5", fontWeight: 500 }}>13327</Box>  <Chip sx={{ size: "small", height: 20 }} label="+25%" color="success" /></Stack>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Sessions per day for the last 30 days</Typography>
                <BarChart
                    width={isMobile ? 720 : 600}
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
    return (
        <Card variant="outlined" sx={{width: "100%" }}>{card}</Card>
    );
}
