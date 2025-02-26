'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import PlaceIcon from '@mui/icons-material/Place';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ShowContact = () => {
    const router = useRouter();
    const [contactData, setContactData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/contact')
            .then((response) => {
                setContactData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [contactData]);


    //Call Delete API

    const deleteContact = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let blog = await fetch(`/api/contact/${id}`, {
                method: 'Delete',
                cache: 'no-cache',
            })
            blog = await blog.json();
            router.refresh()
        } null
    }

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div>
                        <AdminHeading title='Contact Person List' center />
                    </div>
                </Col>
                <hr />

            </Row >
            <Row >
                {
                    contactData.map((item) => (
                        <Col md={6} className='my-2'>
                            <div className='border rounded border-primary p-3 bg-light text-primary'>
                                <div className='d-flex justify-content-between'>
                                    <div className='mx-2'>
                                        <p><span className='mx-2'><PersonIcon /></span>{item.name}</p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='mx-2'><PhoneIcon /></span>+91 {item.contact}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='mx-2'>
                                        <p><span className='mx-2'><EmailIcon /></span>{item.email}</p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='mx-2'><PlaceIcon /></span>{item.state}, {item.district}</p>
                                    </div>
                                </div>
                                <div className='mx-2'>
                                    <p><span className='mx-2'><SubjectIcon /></span>{item.subject}</p>
                                </div>
                                <div className='mx-2'>
                                    <p><span className='mx-2'><MessageIcon /></span>{item.message}</p>
                                </div>

                                <div className='mx-2 float-end'>
                                    <DeleteForeverIcon onClick={() => { deleteContact(item._id) }} color='primary' fontSize='large' />
                                </div>
                            </div>

                        </Col>
                    ))
                }
            </Row >

        </Container >


    );
};

export default ShowContact;
