import type { FC } from "react";
import { Box, Paper, Typography } from "@mui/material";

const ListingsList: FC = () => {
    return (
        <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
                Hosts inventory
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
                All properties associated with your hosts.
            </Typography>

            <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    Property inventory and filters will appear here.
                </Typography>
            </Paper>
        </Box>
    );
};

export default ListingsList;
