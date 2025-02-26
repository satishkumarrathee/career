'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TransgenderIcon from '@mui/icons-material/Transgender';
import SchoolIcon from '@mui/icons-material/School';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import WorkIcon from '@mui/icons-material/Work';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import Link from 'next/link';
import CategoryIcon from '@mui/icons-material/Category';
import BadgeIcon from '@mui/icons-material/Badge';
import PlaceIcon from '@mui/icons-material/Place';
import DomainIcon from '@mui/icons-material/Domain';


const ShowCareer = () => {
    const router = useRouter();
    const [careerData, setCareerData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/career')
            .then((response) => {
                setCareerData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [careerData]);


    //Call Delete API

    const deleteCareer = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let blog = await fetch(`/api/career/${id}`, {
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
                        <AdminHeading title='Career Form List' center />
                    </div>
                </Col>
                <hr />

            </Row >
            <Row >
                {
                    careerData.map((item) => (
                        <Col md={6} className='my-2'>
                            <div className='border border-primary rounded p-3 bg-light text-primary'>
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
                                        <p><span className='mx-2'><SchoolIcon /></span>{item.qualification}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                <div className='mx-2'>
                                    <p><span className='mx-2'>{item.gender === 'Male' ? <MaleIcon /> : item.gender === 'Female' ? <FemaleIcon /> : <TransgenderIcon />}</span>{item.gender}</p>
                                </div>
                                <div className='mx-2'>
                                    <p><span className='mx-2'><WorkIcon /></span>{item.profile}</p>
                                </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                <div className='mx-2'>
                                    <p><span className='mx-2'><PlaceIcon /></span>{item.states}</p>
                                </div>
                                <div className='mx-2'>
                                    <p><span className='mx-2'><DomainIcon /></span>{item.districts}</p>
                                </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                <div className='mx-2'>
                                    <p><span className='mx-2'><BadgeIcon /></span>{item.experience}</p>
                                </div>
                                <div className='mx-2'>
                                    <p><span className='mx-2'><CategoryIcon /></span>{item.category}</p>
                                </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                    <Link href={item.imgUrl} target="_blank">   <Button variant='contained' size='small'>view resume</Button></Link> 
                                    </div>
                                <div className='mx-2 float-end'>
                                    <DeleteForeverIcon onClick={() => { deleteCareer(item._id) }} color='primary' fontSize='large' />
                                </div>
                                </div>
                            </div>

                        </Col>
                    ))
                }
            </Row >

        </Container >


    );
};

export default ShowCareer;
