import React from 'react';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { Box, Chip, Stack, Typography, Card, CardContent } from '@mui/material';

export default function OutlinedCard(props) {
    const settings = {
        valueFormatter: (v) => `${v}%`,
        height: 50,
        showTooltip: true,
        showHighlight: true,
    };

    const smallValues = [15, 6, 8, 7, 12, 0, 2, 3, 4, 6, 8, 7, 9];
    const largeValues = [60, 65, 66, 68, 87, 82, 83, 89, 92, 75, 76, 77, 91];
    
    return (
        <Card variant="outlined" sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent>
                <Typography sx={{ typography: 'body2' }} component="div">
                    {props.heading}
                </Typography>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Box component="span" sx={{ display: 'inline', typography: 'h5', fontWeight: 500 }}>
                        {props.text1}
                    </Box>
                    <Chip
                        sx={{ height: 20, fontSize: '0.75rem' , ml:1}}
                        label={props.text2}
                        color={props.down ? 'error' : 'success'}
                    />
                </Stack>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    {props.text3}
                </Typography>
                <SparkLineChart
                    data={props.down ? smallValues : largeValues}
                    colors={props.down ? ['red'] : ['green']}
                    {...settings}
                />
            </CardContent>
        </Card>
    );
}
