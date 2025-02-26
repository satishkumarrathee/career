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
import 'react-quill/dist/quill.snow.css';


const ShowBlog = () => {
    const router = useRouter();
    const [blogData, setBlogData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/blog')
            .then((response) => {
                setBlogData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, [blogData]);


    //Call Delete API

    const deleteBlog = async (id: any) => {
        if (confirm("Do you want to Delete ?") == true) {
            let blog = await fetch(`/api/blog/${id}`, {
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
                        <AdminHeading title='Manage Blogs' center />
                    </div>
                </Col>
                <hr />
                <Row className='d-flex align-items-center justify-content-center text-center fw-bold'>
                    <Col md={3}>
                        <div>
                            <p>Blog Image</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <p>Meta Title</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <p>Blog Title</p>
                        </div>
                    </Col>
                    <Col md={3} >
                        <div>
                            <p>Action</p>
                        </div>
                    </Col>
                </Row>
                {
                    blogData.map((item: any) => (
                        <Row className='d-flex align-items-center p-2 bg-light border justify-content-center text-center my-2' style={{ fontSize: "13px" }}>

                            <Col md={3}>
                                <div>
                                    <Image width={100} height={30} src={item.imgUrl} alt={item.name} fluid />
                                </div>
                            </Col>
                            <Col md={3}>
                                {/* <div>
                                <p dangerouslySetInnerHTML={{ __html: item.message }} />
                                </div> */}
                                 <div>
                                    <p>{item.title}</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <p>{item.name}</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='mx-2'>
                                        <DeleteForeverIcon onClick={() => { deleteBlog(item._id) }} color='error' fontSize='large' />
                                    </div>
                                    <div className='mx-2'>
                                        <EditIcon onClick={()=>router.push(`/admin/blog/${item._id}`)}  color='success' fontSize='large' />
                                    </div>
                                    <div className='mx-2'>
                                        <VisibilityIcon onClick={()=>router.push(`/admin/blog/${item._id}`)}  color='primary' fontSize='large' />
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

export default ShowBlog;
