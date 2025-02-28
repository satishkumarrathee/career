"use client";
import AdminHeading from "@/app/components/AdminHeading";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Edit from "@mui/icons-material/Edit";
import {
  DataGrid,
  GridToolbar,
  GridColDef,
} from "@mui/x-data-grid";
const ShowCounsellor = () => {
  const router = useRouter();
  const [counsellorData, setCounsellorData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("/api/counsellor")
      .then((response) => {
        setCounsellorData(response.data.data);
      })
      .catch((error: any) => {
        const errorMessage = error.response
          ? error.response.data.message
          : error.message;
        toast.error(errorMessage);
      });
  }, [counsellorData]);

  //Call Delete API

  const deleteCounsellor = async (id: any) => {
    if (confirm("Do you want to Delete ?") == true) {
      let Counsellor = await fetch(`/api/counsellor/${id}`, {
        method: "Delete",
        cache: "no-cache",
      });
      Counsellor = await Counsellor.json();
      router.refresh();
    }
    null;
  };

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
if (counsellorData) {
    rows = counsellorData.map((order: any) => {
        return {
            id: order._id,
            experience: order.experience,
            name: order.name,
            imgUrl: order.imgUrl,
            date: formatDate(order.createdAt),
        };
    });
}
const columns: GridColDef[] = [
  {
    field: "imgUrl",
    headerName: "Image",
    width: 150,
    renderCell: (params: any) => (
      <Image src={params.row.imgUrl} alt={params.row.name} width={150} height={150} fluid roundedCircle /> ),
},
    {
        field: "name",
        headerName: "Title",
        width: 160,
    },
    {
        field: "experience",
        headerName: "experience",
        width: 150,
        renderCell: (params: any) => (
          <div>{params.row.experience} Years</div>
        )
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
            <DeleteForeverIcon onClick={() => { deleteCounsellor(params.row.id) }} color='error' fontSize='large' style={{ cursor: "pointer" }} />
        ),
    },
    {
        field: "edit",
        headerName: "Edit",
        width: 100,
        renderCell: (params: any) => (
            <Edit onClick={() => router.push(`/admin/counsellor/${params.row.id}`)}  color='success' fontSize='large' style={{ cursor: "pointer" }} />
        ),
    }
   
]

return (
    <div style={{ width: "100%" }} className="my-4">
        <div>
            <AdminHeading title="Manage Counsellor Data" center />
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

export default ShowCounsellor;
