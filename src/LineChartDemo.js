import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { dataset } from './gdp';

export default function LineChartDemo() {
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
  const colors = {
    fr: 'lightgray',
    gb: 'yellow',
    dl: 'blue',
  };
  return (
    <LineChart
      dataset={dataset}
      xAxis={[
        {
          id: 'Years',
          dataKey: 'date',
          scaleType: 'time',
          valueFormatter: (date) => date.getFullYear().toString(),
        },
      ]}
      series={[
        {
          id: 'France',
          label: 'French GDP per capita',
          dataKey: 'fr',
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'Germany',
          label: 'German GDP per capita',
          dataKey: 'dl',
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'United Kingdom',
          label: 'UK GDP per capita',
          dataKey: 'gb',
          stack: 'total',
          area: true,
          showMark: false,
        },
      ]}
      width={isMobile ? 720 : 600}
      height={300}
      margin={{ left: 70 }}
      {...colors}
    />
  );
}
