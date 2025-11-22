import type { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

const ResetPassword: FC = () => {
    return (
        <Box className="auth-login">
            <Typography variant="h5" fontWeight={600} gutterBottom className="m-0">
                Reset password
            </Typography>
            <Typography variant="body2" color="text.secondary" className="auth-login-subtitle">
                Set a new password for your admin account.
            </Typography>

            <Box className="mt-4" component="form" noValidate>
                <Box mb={2.5}>
                    <TextField
                        id="password"
                        label="New password"
                        type="password"
                        fullWidth
                        size="small"
                        placeholder="Enter new password"
                        required
                    />
                </Box>

                <Box mb={2.5}>
                    <TextField
                        id="confirmPassword"
                        label="Confirm password"
                        type="password"
                        fullWidth
                        size="small"
                        placeholder="Confirm new password"
                        required
                    />
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    className="auth-primary-btn mt-2"
                    disableElevation
                >
                    Update password
                </Button>

                <Box mt={2} textAlign="center">
                    <RouterLink to="/login" className="text-decoration-none">
                        Back to login
                    </RouterLink>
                </Box>
            </Box>
        </Box>
    );
};

export default ResetPassword;
