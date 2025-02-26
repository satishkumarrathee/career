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

const ManageExam = () => {
    const router = useRouter();
    const [img, setImg] = useState<File | null>(null);
    const [imgPerc, setImgPerc] = useState(0);
    const [inputs, setInputs] = useState<Record<string, string>>({});
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [examType, setExamType] = useState();



    //Firebase Image Data Start
    useEffect(() => {
        img && uploadFile(img, "imgUrl");
    }, [img]);

    const uploadFile = (file: File, fileType: string) => {
        const storage = getStorage(app);
        const folder = fileType === "imgUrl" ? "postexamImages/" : "postexamVideos/";
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, folder + fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                fileType === "imgUrl"
                    ? setImgPerc(Math.round(progress))
                    : null
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                console.log(error);
                switch (error.code) {
                    case "storage/unauthorized":
                        // User doesn't have permission to access the object
                        console.log(error);
                        break;
                    case "storage/canceled":
                        // User canceled the upload
                        break;
                    case "storage/unknown":
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    default:
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs((prev) => {
                        return {
                            ...prev,
                            [fileType]: downloadURL,
                        };
                    });
                });
            }
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let response = await fetch("/api/postexam", {
            method: "POST",
            body: JSON.stringify({ name, description, examType, ...inputs }),
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (response.ok) {
            router.push('/admin/exam');
            toast.success('Exam Added')
        } else {
            toast.error("Something went wrong")
        }
    };


    return (
        <Container>
            <Row className='bg-light p-3 my-3 rounded border'>
            <Col md={12}>
                    <div>
                        <AdminHeading title='Add Latest Exam' center />
                    </div>
                </Col>
                <hr />
                <Col md={6}>
                    <div className='my-4'>
                        <TextField fullWidth type="text" id="name" value={name} onChange={(e: any) => setName(e.target.value)} label="Exam Name" variant="outlined" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className='my-4'>
                        <TextField fullWidth type="text" id="metaTitle" value={examType} onChange={(e: any) => setExamType(e.target.value)} label="Exam Type" variant="outlined" />
                    </div>
                </Col>
                <Col md={12} className='' >

                    <div className='my-4'>
                        <TextField
                            type="text" id="message" value={description} onChange={(e: any) => setDescription(e.target.value)}
                            label="Add Exam Details"
                            multiline
                            fullWidth
                            rows={8}
                        />
                    </div>
                </Col>
                <Col md={12} className='' >
                    <div>
                        <label htmlFor="img">Exam Image:</label> {imgPerc > 0 && "Uploading: " + imgPerc + "%"}

                        <input
                            type="file"
                            accept="image/*"
                            id="img"
                            required
                            onChange={(e: any) => setImg(e.target.files?.[0])}
                        />
                    </div >
                </Col>
                <div className='d-flex align-items-center justify-content-center my-3' >
                    <Button onClick={handleSubmit} variant="contained" color='primary'>Submit</Button>
                </div>
            </Row>
        </Container>
    );
}

export default ManageExam;