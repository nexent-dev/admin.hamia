import type { FC } from "react";
import { Box, Paper, Typography } from "@mui/material";

const Settings: FC = () => {
    return (
        <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
                Settings
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
                Configure system-wide preferences for your Hamia admin.
            </Typography>

            <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    Settings sections (authentication, notifications, workspace) will appear here.
                </Typography>
            </Paper>
        </Box>
    );
};

export default Settings;
