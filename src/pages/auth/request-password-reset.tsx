import type { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

const RequestPasswordReset: FC = () => {
    return (
        <Box className="auth-login">
            <Typography variant="h5" fontWeight={600} gutterBottom className="m-0">
                Forgot password?
            </Typography>
            <Typography variant="body2" color="text.secondary" className="auth-login-subtitle">
                Enter your email and we&apos;ll send you instructions to reset your password.
            </Typography>

            <Box className="mt-4" component="form" noValidate>
                <Box mb={2.5}>
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        size="small"
                        placeholder="you@example.com"
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
                    Send reset link
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

export default RequestPasswordReset;
