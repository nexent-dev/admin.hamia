import type { FC } from "react";
import { Box, Paper, Typography } from "@mui/material";

const HostsList: FC = () => {
    return (
        <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
                Hosts
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
                Manage all hosts connected to your Hamia account.
            </Typography>

            <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    A detailed hosts table will appear here once data is wired.
                </Typography>
            </Paper>
        </Box>
    );
};

export default HostsList;
