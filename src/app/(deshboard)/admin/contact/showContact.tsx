'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import PlaceIcon from '@mui/icons-material/Place';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
    DataGrid,
    GridToolbar,
    GridColDef,
} from "@mui/x-data-grid";

const ShowContact = () => {
    const router = useRouter();
    const [contactData, setContactData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/contact')
            .then((response) => {
                setContactData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [contactData]);


    //Call Delete API

    const deleteContact = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let blog = await fetch(`/api/contact/${id}`, {
                method: 'Delete',
                cache: 'no-cache',
            })
            blog = await blog.json();
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
    if (contactData) {
        rows = contactData.map((order: any) => {
            return {
                id: order._id,
                name: order.name,
                email: order.email,
                contact: order.contact,
                qualification: order.qualification,
                gender: order.gender,
                state: order.state,
                experience: order.experience,
                subject: order.subject,
                message: order.message,
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
            field: "subject",
            headerName: "Subject",
            width: 250,
        },
        {
            field: "message",
            headerName: "Message",
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
                <DeleteForeverIcon onClick={() => { deleteContact(params.row.id) }} color='error' fontSize='large' style={{ cursor: "pointer" }} />
            ),
        }
    ]

    return (
        <div style={{ width: "100%" }} className="my-4">
            <div>
                <AdminHeading title="Manage Contact Data" center />
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

export default ShowContact;
