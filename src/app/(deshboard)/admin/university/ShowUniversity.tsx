'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import LocationDisabledIcon from '@mui/icons-material/LocationDisabled';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import React from 'react';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import app from '@/app/libs/firebase';
import {
    DataGrid,
    GridToolbar,
    GridToolbarQuickFilter,
    GridToolbarExport,
    GridColDef,
  } from "@mui/x-data-grid";

const ShowUniversity = () => {
    const router = useRouter();
    const storage = getStorage(app)
    const [universityData, setUniversityData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/university')
            .then((response) => {
                setUniversityData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [universityData]);


    //Call Delete API

   

    const deleteUniversity = React.useCallback(async (id: string, images: any[]) => {
        toast('Deleting Banner please wait !')
        const handleImageDelete = async () => {
          try {
            for (const item of images) {
              if (item.imgUrl) {
                const imageRef = ref(storage, item.imgUrl)
                await deleteObject(imageRef)
              }
            }
          } catch (error) {
            return console.log('Deleting Banner Image Error', error)
          }
        }
        await handleImageDelete()
    
        // Delete product from MongoDb
        if (confirm("Do you want to Delete ?") == true) {
          axios.delete(`/api/university/${id}`).then((res) => {
            toast.success('university Deleted')
            router.refresh()
          }).catch((err) => {
            toast.error('Failed to delete university')
            console.log(err)
          })
        }
    
      }, [])


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
    
    
    
      if (universityData) {
        rows = universityData.map((order: any) => {
          return {
            id: order._id,
            imgUrl: order.imgUrl,
            name: order.name,
            email: order.email,
            contact: order.contact,
            state: order.state,
            district: order.district,
            address1: order.address1,
            address2: order.address2,
            pincode: order.pincode,
            date: formatDate(order.createdAt),
          };
        });
      }
      const columns: GridColDef[] = [
        {
          field: "image",
          headerName: "Image",
          width: 250,
          renderCell: (params) => (
            <div>
              <Image
                width={150}
                height={150}
                src={params.row.imgUrl}
                alt={params.row.id}
                thumbnail
                className="p-2 m-2"
                fluid
              />
            </div>
          ),
        },
        {
          field: "name",
          headerName: "Name",
          width: 160,
        },
        {
          field: "email",
          headerName: "Email",
          width: 200,
        },
        {
          field: "contact",
          headerName: "Contact",
          width: 150,
        },
        {
          field: "address1",
          headerName: "Address Line 1",
          width: 220,
        },
        {
          field: "address2",
          headerName: "Address Line 2",
          width: 220,
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
          field: "pincode",
          headerName: "Pincode",
          width: 100,
        },
        {
          field: "delete",
          headerName: "Delete",
          width: 140,
          renderCell: (params: any) => (
            <DeleteForeverIcon onClick={() => { deleteUniversity(params.row.id, params.row.imgUrl) }} color='error' fontSize='large' style={{ cursor: "pointer" }} />
          ),
        }
      ]
    
      return (
        <div style={{ width: "100%" }} className="my-4">
          <div>
            <AdminHeading title="University / College Admission Form List" center />
          </div>
          <DataGrid
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            disableRowSelectionOnClick
            rowHeight={140}
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

export default ShowUniversity;
