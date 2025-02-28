'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TransgenderIcon from '@mui/icons-material/Transgender';
import SchoolIcon from '@mui/icons-material/School';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import WorkIcon from '@mui/icons-material/Work';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
    DataGrid,
    GridToolbar,
    GridColDef,
} from "@mui/x-data-grid";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import Link from 'next/link';
import CategoryIcon from '@mui/icons-material/Category';
import BadgeIcon from '@mui/icons-material/Badge';
import PlaceIcon from '@mui/icons-material/Place';
import DomainIcon from '@mui/icons-material/Domain';


const ShowCareer = () => {
    const router = useRouter();
    const [careerData, setCareerData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/career')
            .then((response) => {
                setCareerData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [careerData]);


    //Call Delete API

    const deleteCareer = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let blog = await fetch(`/api/career/${id}`, {
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
    if (careerData) {
        rows = careerData.map((order: any) => {
            return {
                id: order._id,
                name: order.name,
                email: order.email,
                contact: order.contact,
                qualification: order.qualification,
                gender: order.gender,
                state: order.states,
                experience: order.experience,
                profile: order.profile,
                imgUrl: order.imgUrl,
                category: order.category,
                district: order.districts,
                coaching: order.coaching,
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
            field: "gender",
            headerName: "Gender",
            width: 150,
        },
        {
            field: "qualification",
            headerName: "Qualification",
            width: 150,
        },
        {
            field: "experience",
            headerName: "Experience",
            width: 150,
        },
        {
            field: "category",
            headerName: "Category",
            width: 150,
        },
        {
            field: "profile",
            headerName: "Profile",
            width: 150,
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
            width: 100,
            renderCell: (params: any) => (
                <DeleteForeverIcon onClick={() => { deleteCareer(params.row.id) }} color='error' fontSize='large' style={{ cursor: "pointer" }} />
            ),
        },
        {
            field: "resume",
            headerName: "Resume",
            width: 100,
            renderCell: (params: any) => (
              <Link href={`${params.row.imgUrl}` } target='_blank'><VisibilityIcon  color='success' fontSize='large' style={{ cursor: "pointer" }} /></Link>  
            ),
        }
    ]

    return (
        <div style={{ width: "100%" }} className="my-4">
            <div>
                <AdminHeading title="Manage Career Data" center />
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

export default ShowCareer;
