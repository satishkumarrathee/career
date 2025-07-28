'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useMemo, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import 'react-quill/dist/quill.snow.css';
import {
    DataGrid,
    GridToolbar,
    GridToolbarQuickFilter,
    GridToolbarExport,
    GridColDef,
  } from "@mui/x-data-grid";
  import React from 'react';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import app from '@/app/libs/firebase';

const ShowBlog = () => {
    const router = useRouter();
    const storage = getStorage(app)
    const [blogData, setBlogData] = useState<any[]>([]);

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
  axios.get('/api/blog')
    .then((response) => {
      const sortedData = response.data.data.sort(
        (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setBlogData(sortedData);
    })
    .catch((error: any) => {
      const errorMessage = error.response ? error.response.data.message : error.message;
      toast.error(errorMessage);
    });
}, []);






    //Call Delete API

    const deleteBlog = React.useCallback(async (id: string, images: any[]) => {
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
        axios.delete(`/api/blog/${id}`).then((res) => {
          toast.success('blog Deleted')
          router.refresh()
        }).catch((err) => {
          toast.error('Failed to delete blog')
          console.log(err)
        })
      }
  
    }, [])

    let rows: any[] = [];
  
   
  
  if (blogData) {
    rows = blogData.map((order: any) => {
      return {
        id: order._id,
        image: order.imgUrl,
        name: order.name,
        customUrl: order.customUrl,
        title: order.title,
        metaTitle: order.metaTitle,
        date: formatDate(order.createdAt),
      };
    });
  }
    const columns: GridColDef[] =  [
        {
            field: "image",
            headerName: "Image",
            width: 150,
            renderCell: (params) => (
                <div>
                    <Image
                        width={120}
                        height={120}
                        src={params.row.image}
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
            width: 200,
          },
          {
            field: "title",
            headerName: "Title",
            width: 200,
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
                <DeleteForeverIcon onClick={() => { deleteBlog(params.row.id, params.row.imgUrl) }} color='error' fontSize='large' style={{cursor:"pointer"}}/>
            ),
          },
          {
            field: "update",
            headerName: "Update",
            width: 100,
            renderCell: (params: any) => (
                <EditIcon onClick={()=>router.push(`/admin/blog/${params.row.id}`)}  color='success' style={{cursor:"pointer"}} fontSize='large' />
            ),
          },
          {
            field: "view",
            headerName: "View",
            width: 100,
            renderCell: (params: any) => (
                <VisibilityIcon onClick={()=>router.push(`/blog/${params.row.customUrl}`)}  color='primary'  style={{cursor:"pointer"}} fontSize='large' />
            ),  
          },
        ]

      return (
        <div style={{ width: "100%" }} className="my-4">
          <div>
            <AdminHeading title="Manage Blogs" center />
          </div>
          <DataGrid
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            disableRowSelectionOnClick
            rows={rows}
            rowHeight={140}
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

export default ShowBlog;