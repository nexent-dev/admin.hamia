import type { FC } from "react";
import { Box, Paper, Typography } from "@mui/material";

const Analytics: FC = () => {
    return (
        <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
                Analytics
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
                High-level performance and revenue insights.
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
                    gap: 2,
                }}
            >
                <Paper elevation={1} sx={{ p: 2 }}>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                        Revenue overview
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Charts and KPIs will appear here.
                    </Typography>
                </Paper>
                <Paper elevation={1} sx={{ p: 2 }}>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                        Booking performance
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Trends and occupancy metrics will appear here.
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
};

export default Analytics;
