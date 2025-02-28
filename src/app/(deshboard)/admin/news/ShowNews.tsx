'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
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

const ShowNews = () => {
    const router = useRouter();
    const [newsData, setNewsData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/news')
            .then((response) => {
                setNewsData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [newsData]);


    //Call Delete API

    const deleteNews = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let University = await fetch(`/api/news/${id}`, {
                method: 'Delete',
                cache: 'no-cache',
            })
            University = await University.json();
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
    if (newsData) {
        rows = newsData.map((order: any) => {
            return {
                id: order._id,
                title: order.title,
                link: order.link,
                date: formatDate(order.createdAt),
            };
        });
    }
    const columns: GridColDef[] = [
        {
            field: "title",
            headerName: "Title",
            width: 300,
        },
        {
            field: "link",
            headerName: "Link",
            width: 400,
        },
        {
            field: "date",
            headerName: "Date",
            width: 250,
        },

        {
            field: "delete",
            headerName: "Delete",
            width: 100,
            renderCell: (params: any) => (
                <DeleteForeverIcon onClick={() => { deleteNews(params.row.id) }} color='error' fontSize='large' style={{ cursor: "pointer" }} />
            ),
        }
    ]

    return (
        <div style={{ width: "100%" }} className="my-4">
            <div>
                <AdminHeading title="Manage News Scroller Data" center />
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

export default ShowNews;
