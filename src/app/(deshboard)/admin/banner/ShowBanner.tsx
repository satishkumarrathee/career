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

  const deleteProduct = React.useCallback(async(id:string, images:any[]) => {
    toast('Deleting Banner please wait !')
    const handleImageDelete = async () => {
      try {
        for (const item of images){
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
    if (confirm("Do you want to Delete ?")==true) {
    axios.delete(`/api/banner/${id}`).then((res) => {
      toast.success('Banner Deleted')
      router.refresh()}).catch((err)=>{
        toast.error('Failed to delete Banner')
        console.log(err)
      })
    }

  }, [])

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div>
            <AdminHeading title='Manage Banners' center />
          </div>
        </Col>
        <hr />
        <Row className='d-flex align-items-center justify-content-center text-center fw-bold'>
          <Col md={4}>
            <div>
              <p>Banner Image</p>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <p>Title</p>
            </div>
          </Col>
          <Col md={4} >
            <div>
              <p>Action</p>
            </div>
          </Col>
        </Row>
        {
          bannerData.map((item: any) => (
            <Row className='d-flex align-items-center p-2 bg-light border justify-content-center text-center my-2' style={{ fontSize: "13px" }}>

              <Col md={4}>
                <div>
                  <Image width={200} height={50} src={item.imgUrl} alt={item.title} fluid />
                </div>
              </Col>
              <Col md={4}>
                <div>
                 <p className='text-center'>{item.title}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='mx-2'>
                    <DeleteForeverIcon onClick={()=>{deleteProduct(item._id, item.imgUrl)}} color='error' fontSize='large' /></div>
                </div>
              </Col>
            </Row>

          ))
        }
      </Row >
    </Container >


  );
};

export default ManageLawyer;
