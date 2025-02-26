'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/ChangeCircle';
import PasswordIcon from '@mui/icons-material/Password';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container,Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';


const ShowAdmin = () => {
    const router = useRouter();
    const [userData, setUserData] = useState<any[]>([]);

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

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div>
                        <AdminHeading title='Manage Users' center />
                    </div>
                </Col>
                <hr />
                <Row className='d-flex align-items-center justify-content-center text-center fw-bold'>
                    <Col md={3}>
                        <div>
                            <p>Name</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <p>Email</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <p>Role</p>
                        </div>
                    </Col>
                    <Col md={3} >
                        <div>
                            <p>Action</p>
                        </div>
                    </Col>
                </Row>
                {
                    userData.map((item: any,index) => (
                        <Row className='d-flex align-items-center py-1 bg-light border justify-content-center text-center my-2' style={{ fontSize: "15px" }}>

                            <Col md={3}>
                            {index !== 0 && (
                            <div key={index}>
                                    <p>{item.name}</p>
                                </div>)}
                            </Col>
                            <Col md={3}>
                            {index !== 0 && (
                                <div key={index}>
                                    <p>{item.email}</p>
                                </div>)}
                            </Col>
                            <Col md={3}>
                            {index !== 0 && (
                                <div key={index}>
                                    <p>{item.role}</p>
                                </div>)}
                            </Col>
                            <Col md={3}>
                                <div className='d-flex justify-content-center align-items-center'>
                                {index !== 0 && (  <div className='mx-2'>
                                        <DeleteForeverIcon onClick={() => { deleteUser(item.id) }} color='error' fontSize='large' />
                                    </div>)}
                                    {index !== 0 && (  <div className='mx-2'>
                                        <EditIcon onClick={()=>router.push(`/admin/user/${item.id}`)}  color='success' fontSize='large' />
                                    </div>)}
                                    {/* {index !== 0 && (  <div className='mx-2'>
                                        <PasswordIcon onClick={()=>router.push(`/admin/password/${item.id}`)}  color='primary' fontSize='large' />
                                    </div>)} */}
                                  
                                </div>
                            </Col>
                        </Row>

                    ))
                }
            </Row >
        </Container >


    );
};

export default ShowAdmin;
