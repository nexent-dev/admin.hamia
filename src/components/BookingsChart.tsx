import type { FC } from "react";
import Chart from "react-apexcharts";

const BookingsChart: FC = () => {
    const series = [
        {
            name: "Bookings",
            data: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
        },
    ];

    const options: ApexCharts.ApexOptions = {
        chart: {
            type: "line",
                toolbar: { show: false },
                zoom: { enabled: false },
                sparkline: { enabled: true },
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        markers: {
            size: 3,
        },
        colors: ["#1cc78f"],
        grid: {
            borderColor: "rgba(148,163,184,0.3)",
            strokeDashArray: 3,
        },
        xaxis: {
            type: "category",
            labels: {
                show: true,
                rotate: -45,
                style: {
                    colors: "var(--text-dimmer)",
                },
            },
            categories: [
                "2025-11-01",
                "2025-11-02",
                "2025-11-03",
                "2025-11-04",
                "2025-11-05",
                "2025-11-06",
                "2025-11-07",
                "2025-11-08",
                "2025-11-09",
                "2025-11-10",
                "2025-11-11",
            ],
        },
        yaxis: {
            min: 0,
            max: 2,
            tickAmount: 2,
            labels: {
                style: {
                    colors: "var(--text-dimmer)",
                },
            },
        },
        tooltip: {
            theme: "dark",
        },
        legend: { show: false },
    };

    return (
        <Chart
            options={options}
            series={series}
            type="line"
            width="100%"
            height="100%"
        />
    );
};

export default BookingsChart;
