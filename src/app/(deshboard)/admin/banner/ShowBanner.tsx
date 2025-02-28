'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
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

const ManageLawyer = () => {
  const router = useRouter();
  const storage = getStorage(app)
  const [bannerData, setBannerData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('/api/banner')
      .then((response) => {
        setBannerData(response.data.data);
      })
      .catch((error: any) => {
        const errorMessage = error.response ? error.response.data.message : error.message;
        toast.error(errorMessage);
      });
  }, [bannerData]);


  //Call Delete API

  const deleteProduct = React.useCallback(async (id: string, images: any[]) => {
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
      axios.delete(`/api/banner/${id}`).then((res) => {
        toast.success('Banner Deleted')
        router.refresh()
      }).catch((err) => {
        toast.error('Failed to delete Banner')
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



  if (bannerData) {
    rows = bannerData.map((order: any) => {
      return {
        id: order._id,
        imgUrl: order.imgUrl,
        title: order.title,
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
      field: "title",
      headerName: "Title",
      width: 350,
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
        <DeleteForeverIcon onClick={() => { deleteProduct(params.row.id, params.row.imgUrl) }} color='error' fontSize='large' style={{ cursor: "pointer" }} />
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

export default ManageLawyer;
