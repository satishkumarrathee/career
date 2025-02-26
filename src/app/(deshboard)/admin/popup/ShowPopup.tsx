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


const ShowPopup = () => {
    const router = useRouter();
    const [popupData, setPopupData] = useState<any[]>([]);

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

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div>
                        <AdminHeading title='Manage Popup Data' center />
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
                            <p>Contact</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <p>Email</p>
                        </div>
                    </Col>
                    <Col md={3} >
                        <div>
                            <p>Action</p>
                        </div>
                    </Col>
                </Row>
                {
                    popupData.map((item: any) => (
                        <Row className='d-flex align-items-center p-2 bg-light border justify-content-center text-center my-2' style={{ fontSize: "13px" }}>

                            <Col md={3}>
                                <div>
                                <p>{item.name}</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <p>{item.contact}</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <p>{item.email}</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='mx-2'>
                                        <DeleteForeverIcon onClick={() => { deletePopup(item._id) }} color='error' fontSize='large' />
                                    </div>
                                    
                                </div>
                            </Col>
                        </Row>

                    ))
                }
            </Row >
        </Container >


    );
};

export default ShowPopup;
