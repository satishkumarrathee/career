'use client'
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ShowNews = () => {
    const router = useRouter();
    const [newsData, setNewsData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/news')
            .then((response) => {
                setNewsData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [newsData]);


    //Call Delete API

    const deleteNews = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let University = await fetch(`/api/news/${id}`, {
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
                        <AdminHeading title='News Scroller Form List' center />
                    </div>
                </Col>
                <hr />
                <Row className='d-flex align-items-center justify-content-center text-center fw-bold'>
                
                    <Col md={4}>
                        <div>
                            <p>News Title</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <p>News Link</p>
                        </div>
                    </Col>
                    <Col md={4} >
                        <div>
                            <p>Action</p>
                        </div>
                    </Col>
                </Row>

            </Row >
            <Row >
                {
                    newsData.map((item) => (
                        <Row className='d-flex align-items-center p-2 bg-light border justify-content-center text-center my-2' style={{ fontSize: "13px" }}>
                            <Col md={4}>
                                <div>
                                    <p>{item.title}</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div>
                                    <p >{item.link}</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='mx-2'>
                                        <DeleteForeverIcon onClick={() => { deleteNews(item._id) }} color='error' fontSize='large' />
                                    </div>
                                    {/* <div className='mx-2'>
                                        <EditIcon onClick={()=>router.push(`/admin/blog/${item._id}`)}  color='success' fontSize='large' />
                                    </div>
                                    <div className='mx-2'>
                                        <VisibilityIcon  color='primary' fontSize='large' />
                                    </div> */}
                                </div>
                            </Col>
                        </Row>
                    ))
                }
            </Row >

        </Container >


    );
};

export default ShowNews;
