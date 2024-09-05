import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
const data = [
    { id: 0, value: 80, label: 'India' },
    { id: 1, value: 50, label: 'Brazil' },
    { id: 2, value: 20, label: 'USA' },
    { id: 3, value: 10, label: 'China' },
];
const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 15,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

export default function PieActiveArc() {
    return (
        <PieChart
            series={[
                {
                    data,
                    highlightScope: { fade: 'global', highlight: 'item' },
                    faded: { innerRadius: 80, additionalRadius: -60, color: 'gray' },
                    innerRadius: 60
                }
            ]}
            margin={{ left: 100 }}
            width={400}
            height={300}
            slotProps={{
                legend: {
                    direction: 'row',
                    position: { vertical: 'bottom', horizontal: 'middle' },
                    itemMarkWidth: 20,
                    itemMarkHeight: 7,
                    markGap: 5,
                    itemGap: 10,
                },
            }}

        >
            <PieCenterLabel children={"160K Total"}></PieCenterLabel>
        </PieChart>
    );
}
