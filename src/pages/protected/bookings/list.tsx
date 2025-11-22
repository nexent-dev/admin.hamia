import type { FC } from "react";
import { Box, Paper, Typography } from "@mui/material";

const BookingsList: FC = () => {
    return (
        <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
                Bookings
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
                Track reservations and stays across all hosts.
            </Typography>

            <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    Booking list and filters will appear here.
                </Typography>
            </Paper>
        </Box>
    );
};

export default BookingsList;
