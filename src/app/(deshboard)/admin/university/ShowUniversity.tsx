'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import LocationDisabledIcon from '@mui/icons-material/LocationDisabled';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';


const ShowUniversity = () => {
    const router = useRouter();
    const [universityData, setUniversityData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/university')
            .then((response) => {
                setUniversityData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [universityData]);


    //Call Delete API

    const deleteUniversity = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let University = await fetch(`/api/university/${id}`, {
                method: 'Delete',
                cache: 'no-cache',
            })
            University = await University.json();
            router.refresh()
        } null
    }

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div>
                        <AdminHeading title='University / College Admission Form List' center />
                    </div>
                </Col>
                <hr />

            </Row >
            <Row >
                {
                    universityData.map((item) => (
                        <Col md={4} className='my-2'>
                            <div className='border rounded border-primary p-3 bg-light text-primary'>
                                <div>
                                    <Image src={item.imgUrl} alt={item.name} fluid/>
                                </div>
                                <hr />
                                    <div className='mx-2'>
                                        <p><span className='mx-2'><SchoolIcon /></span>{item.name}</p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='mx-2'><PhoneIcon /></span>+91 {item.contact}</p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='mx-2'><EmailIcon /></span>{item.email}</p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='mx-2'><LocationOnIcon /></span> {item.address1}</p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='mx-2'><NotListedLocationIcon /></span> {item.address2}</p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='mx-2'><LocationDisabledIcon /></span>{item.state} </p>
                                    </div>
                                    <div className='mx-2'>
                                        <p><span className='mx-2'><LocationCityIcon /></span>{item.district}</p>
                                    </div>
                               
                                <div className='mx-2'>
                                    <p><span className='mx-2'><AssistantDirectionIcon /></span>{item.pincode}</p>
                                </div>
                                <div className='mx-2 float-end'>
                                    <DeleteForeverIcon onClick={() => { deleteUniversity(item._id) }} color='primary' fontSize='large' />
                                </div>
                            </div>

                        </Col>
                    ))
                }
            </Row >

        </Container >


    );
};

export default ShowUniversity;
