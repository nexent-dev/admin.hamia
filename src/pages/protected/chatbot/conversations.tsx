import type { FC } from "react";
import { Box, Paper, Typography } from "@mui/material";

const ChatbotConversations: FC = () => {
    return (
        <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
                Chatbot conversations
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
                Review and monitor guest conversations handled by the Hamia assistant.
            </Typography>

            <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    Conversation list and details will appear here.
                </Typography>
            </Paper>
        </Box>
    );
};

export default ChatbotConversations;
