"use client";
import AdminHeading from "@/app/components/AdminHeading";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Edit from "@mui/icons-material/Edit";

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

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div>
            <AdminHeading title="Counsellor List" center />
          </div>
        </Col>
     
      <hr />
      {counsellorData.map((item) => (
      
          <Col md={4}>
            <div className="border p-3 border-primary rounded d-flex">
              <div className="p-2">
                <Image src={item.imgUrl} alt={item.name} width={100} height={100} fluid roundedCircle />
              </div>
              <div className="ms-3">
                <p className="fs-6">{item.name}</p>
                <p className="fs-5">{item.experience} Years</p>
                <div className="mx-2 d-flex">
                <div className="mx-2">
                <DeleteForeverIcon
                  onClick={() => {
                    deleteCounsellor(item._id);
                  }}
                  color="error"
                  fontSize="large"
                />
                </div>
                <div className="mx-2">
                <Edit onClick={()=>router.push(`/admin/counsellor/${item._id}`)}  color='success' fontSize='large' />
                </div>
              </div>
              </div>
            </div>
          </Col>

      ))}
       </Row>
    </Container>
  );
};

export default ShowCounsellor;
