'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
    DataGrid,
    GridToolbar,
    GridColDef,
} from "@mui/x-data-grid";
const ShowForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/form')
            .then((response) => {
                setFormData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [formData]);


     //Call Delete API

     const deleteForm = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let data = await fetch(`/api/form/${id}`, {
                method: 'Delete',
                cache: 'no-cache',
            })
            data = await data.json();
            router.refresh()
        } null
    }

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleString("en-GB", {
            timeZone: "Asia/Kolkata",
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });
    };
    let rows: any[] = [];
    if (formData) {
        rows = formData.map((order: any) => {
            return {
                id: order._id,
                name: order.name,
                email: order.email,
                contact: order.contact,
                qualification: order.qualification,
                gender: order.gender,
                state: order.state,
                experience: order.experience,
                program: order.program,
                descipline: order.descipline,
                university: order.university,
                type: order.type,
                district: order.district,
                date: formatDate(order.createdAt),
            };
        });
    }
    const columns: GridColDef[] = [
        {
            field: "name",
            headerName: "Name",
            width: 150,
        },
        {
            field: "email",
            headerName: "Email",
            width: 250,
        },
        {
            field: "contact",
            headerName: "Contact",
            width: 150,
        },
        {
            field: "type",
            headerName: "Type",
            width: 250,
        },
        {
            field: "university",
            headerName: "University",
            width: 250,
        },
        {
            field: "program",
            headerName: "Program",
            width: 250,
        },
        {
            field: "qualification",
            headerName: "Qualification",
            width: 200,
        },
        {
            field: "descipline",
            headerName: "Descipline",
            width: 250,
        },
        {
            field: "state",
            headerName: "State",
            width: 150,
        },
        {
            field: "district",
            headerName: "District",
            width: 150,
        },
        {
            field: "date",
            headerName: "Date",
            width: 200,
        },
        {
            field: "delete",
            headerName: "Delete",
            width: 140,
            renderCell: (params: any) => (
                <DeleteForeverIcon onClick={() => { deleteForm(params.row.id) }} color='error' fontSize='large' style={{ cursor: "pointer" }} />
            ),
        }
    ]

    return (
        <div style={{ width: "100%" }} className="my-4">
            <div>
                <AdminHeading title="Manage Student Form Filled Data" center />
            </div>
            <DataGrid
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                disableRowSelectionOnClick
                rows={rows}
                columns={columns}
                hideFooter={true}
                getRowId={(row) => row.id}
                slots={{ toolbar: GridToolbar }}
                sx={{
                    "& .MuiDataGrid-row:hover": {
                        backgroundColor: "inherit",
                    },

                    "& .MuiDataGrid-cell:focus": {
                        outline: "none",
                    },
                    "& .MuiDataGrid-row.Mui-selected:hover": {
                        backgroundColor: "inherit",
                    },
                    "& .MuiDataGrid-cell:focus-within": {
                        outline: "none",
                    },
                }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: {
                            debounceMs: 500,
                        }
                    },
                }}
            />
        </div>
    );
};

export default ShowForm;
