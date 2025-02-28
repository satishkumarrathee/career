'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';

import {
    DataGrid,
    GridToolbar,
    GridColDef,
  } from "@mui/x-data-grid";

const ShowExam = () => {
    const router = useRouter();
    const [examData, setExamData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/exam')
            .then((response) => {
                setExamData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [examData]);


    //Call Delete API

    const deleteExam = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let Exam = await fetch(`/api/exam/${id}`, {
                method: 'Delete',
                cache: 'no-cache',
            })
            Exam = await Exam.json();
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
    
    
    
      if (examData) {
        rows = examData.map((order: any) => {
          return {
            id: order._id,
            name: order.name,
            email: order.email,
            contact: order.contact,
            gender: order.gender,
            dateOfBirth: order.dateOfBirth,
            state: order.state,
            district: order.district,
            exam: order.exam,
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
          field: "exam",
          headerName: "Exam",
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
          field: "dateOfBirth",
          headerName: "Date Of Birth",
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
            <DeleteForeverIcon onClick={() => { deleteExam(params.row.id) }} color='error' fontSize='large' style={{ cursor: "pointer" }} />
          ),
        }
      ]
    
      return (
        <div style={{ width: "100%" }} className="my-4">
        
                    {/* <div className='float-end mt-3'>
                        <Button variant='contained' color='primary' onClick={()=>router.push('/admin/exam/postexam')}>latest exam post</Button>
                    </div> */}
          <div>
            <AdminHeading title="Manage Exam Data" center />
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

export default ShowExam;
