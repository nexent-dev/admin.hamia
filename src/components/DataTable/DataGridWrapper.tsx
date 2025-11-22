import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface DataGridWrapperProps {
    columns: GridColDef[];
    rows: any[];
    loading?: boolean;
}

export default function DataGridWrapper({ columns, rows, loading = false }: DataGridWrapperProps) {
    // Make columns flexible to fill available space
    const flexColumns = columns.map(col => ({
        ...col,
        flex: col.flex || 1,
        minWidth: col.minWidth || col.width || 150,
    }));

    // Ensure pageSize is valid (minimum 5)
    const pageSize = rows.length > 0 ? Math.min(rows.length, 10) : 10;
    const pageSizeOptions = [5, 10, 25, 50, 100];

    return (
        <Box sx={{ width: '100%', borderRadius: 2 }}>
            <DataGrid
                rows={rows}
                columns={flexColumns}
                loading={loading}
                slots={{
                    toolbar: GridToolbar,
                }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize },
                    },
                }}
                pageSizeOptions={pageSizeOptions}
                checkboxSelection
                disableRowSelectionOnClick
                autoHeight
                sx={{
                    border: 'none',
                    '& .MuiDataGrid-toolbarContainer': {
                        padding: 2,
                        borderBottom: 1,
                        borderColor: 'divider',
                        backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: 'transparent',
                        borderBottom: '2px solid',
                        borderColor: 'divider',
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        fontWeight: 600,
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: '1px solid',
                        borderColor: 'divider',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 16px',
                    },
                    '& .MuiTablePagination-root': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                    '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
                        margin: 0,
                    },
                }}
            />
        </Box>
    );
}
