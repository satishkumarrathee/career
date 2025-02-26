'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ShowForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/form')
            .then((response) => {
                setFormData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [formData]);


     //Call Delete API

     const deleteForm = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let data = await fetch(`/api/form/${id}`, {
                method: 'Delete',
                cache: 'no-cache',
            })
            data = await data.json();
            router.refresh()
        } null
    }


    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div>
                        <AdminHeading title='Form List' center />
                    </div>
                </Col>
                <hr />

            </Row >
            <Row >
                {
                    formData.map((item) => (
                        <Col md={6} className='my-2'>
                            <div className='border rounded border-primary p-3 bg-light text-primary'>
                                <div className='d-flex justify-content-between'>
                                    <div className='mx-2'>
                                        <p><span className='fw-bold'>Name :</span> {item.name}</p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='fw-bold'>Contact : +91</span> {item.contact}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='mx-2'>
                                        <p><span className='fw-bold'>Email :</span> {item.email}</p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='fw-bold'>State :</span> {item.state}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='mx-2'>
                                        <p><span className='fw-bold'>District :</span> {item.district} </p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='fw-bold'>Qualification :</span> {item.qualification}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                <div className='mx-2'>
                                        <p><span className='fw-bold'>Descipline :</span> {item.descipline}</p>
                                    </div>
                                <div className='mx-2'>
                                        <p><span className='fw-bold'>Program :</span> {item.program}</p>
                                    </div>
                                    
                                </div>
                                <div className='d-flex justify-content-between'>
                                <div className='mx-2'>
                                        <p><span className='fw-bold'>University :</span> {item.university}</p>
                                    </div>
                                <div className='mx-2'>
                                        <p><span className='fw-bold'>Course Type :</span> {item.type}</p>
                                    </div>
                                    
                                </div>
                                <div className='mx-2 float-end'>
                                    <DeleteForeverIcon onClick={() => { deleteForm(item._id) }} color='primary' fontSize='large' />
                                </div>

                            </div>

                        </Col>
                    ))
                }
            </Row >

        </Container >


    );
};

export default ShowForm;
