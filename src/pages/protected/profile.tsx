import type { FC } from "react";
import { Box, Paper, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const Profile: FC = () => {
    const { profile }: any = useAuth();

    return (
        <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
                Profile
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
                Manage your admin account details.
            </Typography>

            <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Basic information
                </Typography>
                <Typography variant="body2">
                    Name: {profile ? `${profile.user.first_name} ${profile.user.last_name}` : "-"}
                </Typography>
                <Typography variant="body2">
                    Email: {profile ? profile.user.email : "-"}
                </Typography>
            </Paper>
        </Box>
    );
};

export default Profile;
