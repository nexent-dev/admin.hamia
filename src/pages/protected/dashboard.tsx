import type { FC } from "react";
import { Box, Typography } from "@mui/material";
import Summary from "../../components/summary";
import DataTable, { type Column } from "../../components/DataTable";
import BookingsChart from "../../components/BookingsChart";

interface ActivityRow {
    id: number;
    date: string;
    host: string;
    listing: string;
    action: string;
}

const Dashboard: FC = () => {
    return (
        <Box>
            <Typography variant="h4" fontWeight={600} gutterBottom>
                Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
                Overview of your Hamia operations.
            </Typography>

            <Box
                mb={3}
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                <Summary label="Active hosts" value="0" />
                <Summary label="Active listings" value="0" />
                <Summary label="Upcoming bookings" value="0" />
            </Box>

            {/* Simple line chart placeholder */}
            <Box
                mb={3}
                sx={{
                    backgroundColor: "var(--background-dimmer)",
                    borderRadius: "5px",
                    border: "1px solid var(--border-color)",
                    padding: "12px 16px 8px",
                }}
            >
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Bookings over time
                </Typography>
                <Box sx={{ width: "100%", height: 220 }}>
                    <BookingsChart />
                </Box>
            </Box>

            <Box
                sx={{
                    backgroundColor: "var(--background-dimmer)",
                    borderRadius: "5px",
                    border: "1px solid var(--border-color)",
                    padding: "16px 20px",
                }}
            >
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Recent activity
                </Typography>
                {(() => {
                    const columns: Column<ActivityRow>[] = [
                        { id: "date", label: "Date", sortable: true },
                        { id: "host", label: "Host" },
                        { id: "listing", label: "Listing" },
                        { id: "action", label: "Action" },
                    ];

                    const rows: ActivityRow[] = [
                        {
                            id: 1,
                            date: "2025-11-01",
                            host: "Sample Host",
                            listing: "Sample Listing",
                            action: "Booking created",
                        },
                    ];

                    return (
                        <Box mt={1}>
                            <DataTable<ActivityRow>
                                columns={columns}
                                data={rows}
                                defaultSort="date"
                                defaultOrder="desc"
                            />
                        </Box>
                    );
                })()}
            </Box>
        </Box>
    );
};

export default Dashboard;
