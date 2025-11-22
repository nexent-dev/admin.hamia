import type { FC, FormEvent } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, FormControlLabel, Checkbox, Alert } from "@mui/material";
import { useState } from "react";
import useApiServices from "../../hooks/useAPI";
import useAuth from "../../hooks/useAuth";

const Login: FC = () => {
    const navigate = useNavigate();
    const api = useApiServices();
    const { setAuth }: any = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError(null);

        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }

        try {
            setSubmitting(true);

            const formData = new FormData();
            formData.append("username", email);
            formData.append("password", password);
            if (remember) {
                formData.append("remember_me", "true");
            }

            const response: any = await api.login(formData);

            if (response?.success) {
                setAuth(response?.data ?? null);
                navigate("/", { replace: true });
                return;
            }

            setError(response?.message || "Unable to sign in. Please check your credentials.");
        } catch (e: any) {
            setError(e?.response?.data?.message || e?.message || "Unexpected error during sign in.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Box className="auth-login">
            <Typography variant="h5" fontWeight={600} gutterBottom className="m-0">
                Welcome back
            </Typography>
            <Typography variant="body2" color="text.secondary" className="auth-login-subtitle">
                Welcome back! Please enter your details.
            </Typography>

            {error && (
                <Box mt={2}>
                    <Alert severity="error" variant="outlined">
                        {error}
                    </Alert>
                </Box>
            )}

            <Box className="mt-4" component="form" noValidate onSubmit={handleSubmit}>
                <Box mb={2.5}>
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        size="small"
                        placeholder="you@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>

                <Box mb={1}>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        size="small"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className="auth-login-meta"
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                size="small"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />
                        }
                        label="Remember for 30 days"
                    />
                    <RouterLink to="/request-password-reset" className="text-decoration-none">
                        Forgot password?
                    </RouterLink>
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    className="auth-primary-btn mt-2"
                    disableElevation
                    disabled={submitting}
                >
                    {submitting ? "Signing in..." : "Sign in"}
                </Button>
            </Box>
        </Box>
    );
};

export default Login;
