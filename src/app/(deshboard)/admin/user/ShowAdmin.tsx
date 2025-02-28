'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container,Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import {
    DataGrid,
    GridToolbar,
    GridToolbarQuickFilter,
    GridToolbarExport,
    GridColDef,
  } from "@mui/x-data-grid";

const ShowAdmin = () => {
    const router = useRouter();
    const [userData, setUserData] = useState<any[]>([]);

    
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
        axios.get('/api/user')
            .then((response) => {
                setUserData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [userData]);


    //Call Delete API

    const deleteUser = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let admin = await fetch(`/api/user/${id}`, {
                method: 'Delete',
                cache: 'no-cache',
            })
            admin = await admin.json();
            router.refresh()
        } null
    }

    let rows: any[] = [];
  
   
  
    if (userData) {
      rows = userData.map((order: any) => {
        return {
          id: order.id,
          name: order.name,
          email: order.email,
          role: order.role,
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
              width: 250,
            },
            {
              field: "role",
              headerName: "Role",
              width: 150,
            },
            {
              field: "delete",
              headerName: "Delete",
              width: 100,
              renderCell: (params: any) => (
                  <DeleteForeverIcon onClick={() => { deleteUser(params.row.id) }} color='error' fontSize='large' style={{cursor:"pointer"}}/>
              ),
            },
            {
              field: "update",
              headerName: "Update",
              width: 100,
              renderCell: (params: any) => (
                  <EditIcon onClick={()=>router.push(`/admin/user/${params.row.id}`)}  color='success' style={{cursor:"pointer"}} fontSize='large' />
              ),
            }
          ]
  
        return (
          <div style={{ width: "100%" }} className="my-4">
            <div>
              <AdminHeading title="Manage Users" center />
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

export default ShowAdmin;
