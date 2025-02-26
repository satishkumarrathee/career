'use client'
import Button from '@mui/material/Button';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '@/app/libs/firebase';
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Container, Col, Row } from 'react-bootstrap';
import AdminHeading from '@/app/components/AdminHeading';

const ManageNews = () => {
    const router = useRouter();
    const [title, setTitle] = useState();
    const [link, setLink] = useState();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let response = await fetch("/api/news", {
            method: "POST",
            body: JSON.stringify({ title, link }),
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (response.ok) {
            router.refresh();
            toast.success('Latest News Added')
        } else {
            toast.error("Something went wrong")
        }
    };


    return (
        <>
        <div>
        <AdminHeading title='Add Latest News' center />
    </div>
        <div className='d-flex justify-content-center my-5 align-items-center'>
        <form onSubmit={handleSubmit} className='border rounded shadow p-5'>
            <TextField label="Title" variant="outlined" className='my-3' type="text" value={title} autoComplete='off' onChange={(e:any)=>setTitle(e.target.value)} required/><br />
            <TextField label="Link" variant="outlined" className='my-3' type="text" value={link} autoComplete='off' onChange={(e:any)=>setLink(e.target.value)} required/><br />
            <div className='d-flex justify-content-center my-2 align-items-center'>
            <Button type='submit' variant='contained' color='primary'>Submit</Button>
            </div>
        </form>
    </div>
    </>
    );
}

export default ManageNews;