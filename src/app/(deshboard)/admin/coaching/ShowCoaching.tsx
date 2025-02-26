'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const ShowCoaching = () => {
    const router = useRouter();
    const [coachingData, setCoachingData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/coaching')
            .then((response) => {
                setCoachingData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [coachingData]);


    //Call Delete API

    const deleteCoaching = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let Coaching = await fetch(`/api/coaching/${id}`, {
                method: 'Delete',
                cache: 'no-cache',
            })
            Coaching = await Coaching.json();
            router.refresh()
        } null
    }


    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div>
                        <AdminHeading title='Coaching Form List' center />
                    </div>
                </Col>
                <hr />

            </Row >
            <Row >
                {
                    coachingData.map((item) => (
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
                                        <p><span className='fw-bold'>Gender :</span> {item.gender}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='mx-2'>
                                        <p><span className='fw-bold'>State :</span> {item.state} </p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='fw-bold'>District :</span> {item.district}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                <div className='mx-2'>
                                        <p><span className='fw-bold'>Coaching :</span> {item.coaching}</p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='fw-bold'>Date of Birth :</span> {item.dateOfBirth}</p>
                                    </div>
                                </div>
                                <div className='mx-2 float-end'>
                                    <DeleteForeverIcon onClick={() => { deleteCoaching(item._id) }} color='primary' fontSize='large' />
                                </div>

                            </div>

                        </Col>
                    ))
                }
            </Row >

        </Container >


    );
};

export default ShowCoaching;
