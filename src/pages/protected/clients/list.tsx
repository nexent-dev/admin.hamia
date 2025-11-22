import type { FC } from "react";
import { Box, Paper, Typography } from "@mui/material";

const ClientsList: FC = () => {
    return (
        <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
                Clients
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
                View and manage guest accounts.
            </Typography>

            <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    A clients table will appear here once data is connected.
                </Typography>
            </Paper>
        </Box>
    );
};

export default ClientsList;
