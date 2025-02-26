'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const ShowAdmission = () => {
    const router = useRouter();
    const [admissionData, setAdmissionData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/admission')
            .then((response) => {
                setAdmissionData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [admissionData]);


    //Call Delete API

    const deleteAdmission = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let Admission = await fetch(`/api/admission/${id}`, {
                method: 'Delete',
                cache: 'no-cache',
            })
            Admission = await Admission.json();
            router.refresh()
        } null
    }


    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div>
                        <AdminHeading title='Admission Form List' center />
                    </div>
                </Col>
                <hr />

            </Row >
            <Row >
                {
                    admissionData.map((item) => (
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
                                        <p><span className='fw-bold'>Course Type :</span> {item.courseType}</p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='fw-bold'>Date of Birth :</span> {item.dateOfBirth}</p>
                                    </div>


                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='mx-2'>
                                        <p><span className='fw-bold'>Course :</span> {item.course}</p>
                                    </div>

                                    <div className='mx-2'>
                                        <p> <span className='fw-bold'>Specilization :</span> {item.specilization}</p>
                                    </div>
                                </div>


                                <div className='mx-2 float-end'>
                                    <DeleteForeverIcon onClick={() => { deleteAdmission(item._id) }} color='primary' fontSize='large' />
                                </div>

                            </div>

                        </Col>
                    ))
                }
            </Row >

        </Container >


    );
};

export default ShowAdmission;
