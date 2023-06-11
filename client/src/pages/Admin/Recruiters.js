import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

const columns = [
    { 
        field: "id", 
        headerName: "ID",
        width: 70 
    },
    { 
        field: "companyName", 
        headerName: "Name",
        width: 130 
    },
    {
        field: "ceo",
        headerName: "CEO",
        width: 130
    },
    {
        field: "vacancy",
        headerName: "No of vacancies",
        width: 130
    },
    {
        field: "placed",
        headerName: "No of Placed",
        width: 130
    },
    {
        field: "package",
        headerName: "Package",
        widht: 100
    }
];

const rows = [
    { id: 1, companyName: "Apple", ceo: "Tim Cook", vacancy: 23, placed: 10, package: 1000000 },
    { id: 2, companyName: "Google", ceo: "Sundar Pichai", vacancy: 65, placed: 24, package: 700000 },
    { id: 3, companyName: "Meta", ceo: "Mark Zuckerberg", vacancy: 16, placed: 8, package: 2500000 },
    { id: 4, companyName: "Space X", ceo: "Elon Musk", vacancy: 45, placed: 37, package: 800000 },
    { id: 5, companyName: "Microsoft", ceo: "Satya Nadella", vacancy: 51, placed: 26, package: 300000 },
    { id: 6, companyName: "Amazon", ceo: "Andy Jassy", vacancy: 35, placed: 26, package: 1500000 },
];

const Recruiter = () => {
    return (
        <Box margin="10px">
            <Typography variant="h4" marginBottom="10px">Recruiter Details</Typography>
            <Box
                sx={{
                '& .MuiTablePagination-selectLabel': {
                    marginTop: '16px',
                },
                '& .MuiTablePagination-displayedRows': {
                    marginTop: '16px',
                },
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                        paginationModel: { page: 0, pageSize: 5 }
                        },
                    }}
                    //   checkboxSelection
                    pageSizeOptions={[5, 10]}
                />
            </Box>
        </Box>
    );
}

export default Recruiter;
