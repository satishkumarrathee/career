'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import {
    DataGrid,
    GridToolbar,
    GridToolbarQuickFilter,
    GridToolbarExport,
    GridColDef,
  } from "@mui/x-data-grid";

const ShowPopup = () => {
    const router = useRouter();
    const [popupData, setPopupData] = useState<any[]>([]);

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
      

    useEffect(() => {
        axios.get('/api/popup')
            .then((response) => {
                setPopupData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [popupData]);


    //Call Delete API

    const deletePopup = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let popup = await fetch(`/api/popup/${id}`, {
                method: 'Delete',
                cache: 'no-cache',
            })
            popup = await popup.json();
            router.refresh()
        } null
    }

    


    let rows: any[] = [];
  
   
  
    if (popupData) {
      rows = popupData.map((order: any) => {
        return {
          id: order._id,
          name: order.name,
          email: order.email,
          contact: order.contact,
          date: formatDate(order.createdAt),
        };
      });
    }
      const columns: GridColDef[] =  [
            {
              field: "name",
              headerName: "Name",
              width: 200,
            },
            {
              field: "email",
              headerName: "Email",
              width: 280,
            },
            {
              field: "contact",
              headerName: "Contact",
              width: 200,
            },
            {
              field: "date",
              headerName: "Date",
              width: 220,
            },
            {
              field: "delete",
              headerName: "Delete",
              width: 140,
              renderCell: (params: any) => (
                  <DeleteForeverIcon onClick={() => { deletePopup(params.row.id) }} color='error' fontSize='large' style={{cursor:"pointer"}}/>
              ),
            }
          ]
  
        return (
          <div style={{ width: "100%" }} className="my-4">
            <div>
              <AdminHeading title="Manage Popup" center />
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

export default ShowPopup;
