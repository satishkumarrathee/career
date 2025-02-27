'use client'
import Button from '@mui/material/Button';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '@/app/libs/firebase';
import toast from 'react-hot-toast'
import TextField from '@mui/material/TextField';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import AdminHeading from '@/app/components/AdminHeading';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

const UpdateBlog = () => {
    const router = useRouter();
    const [img, setImg] = useState<File | null>(null);
    const [imgPerc, setImgPerc] = useState(0);
    const [inputs, setInputs] = useState<Record<string, string>>({});
    const [name, setName] = useState();
    const [message, setMessage] = useState("");
    const [metaTitle, setMetaTitle] = useState();
    const [metaDescription, setMetaDescription] = useState();
    const [title, setTitle] = useState();
    const [customUrl, setCustomUrl] = useState();
    const [keywords, setKeywords] = useState();


    //Firebase Image Data Start
    useEffect(() => {
        img && uploadFile(img, "imgUrl");
    }, [img]);

    const uploadFile = (file: File, fileType: string) => {
        const storage = getStorage(app);
        const folder = fileType === "imgUrl" ? "blogsImages/" : "blogsvideos/";
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

    // Call Single API Data

    const params = useParams();
    useEffect(() => {
        const pullData = async () => {
            let singleData = await axios.get(`/api/blog/${params.id}`).then((res) => (res.data.data)).
                catch((err) => console.log(err, +'Error Found Fetch API'))
            setName(singleData.name)
            setMessage(singleData.message)
            setMetaTitle(singleData.metaTitle)
            setMetaDescription(singleData.metaDescription)
            setTitle(singleData.title)
            setCustomUrl(singleData.customUrl)
            setKeywords(singleData.keywords)
        }

        pullData();
    }, [])
    // Data

    // Update User Data

    const handleSubmit = async () => {

        const pushData = await fetch(`/api/blog/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name,metaTitle,metaDescription,customUrl,title,keywords, message,...inputs }),
            headers: { "Content-Type": "application/json" }
        })
        await pushData.json();
        router.push('/admin/blog');
        toast.success("Blog Update")
    }



    return (
        <Container>
            <Row className='p-3 my-3 border'>
            <Col md={12}>
                    <div>
                        <AdminHeading title='Update Blogs' center />
                    </div>
                </Col>
                <hr />
                <Col md={4}>
                        <div className='my-4'>
                            <TextField fullWidth required type="text" id="name" value={name} onChange={(e: any) => setName(e.target.value)} label="Name" variant="outlined" />
                        </div>
                        </Col>
                        <Col md={4}>
                    <div className='my-4'>
                        <TextField fullWidth type="text" required id="Title" value={title} onChange={(e: any) => setTitle(e.target.value)} label="Title" variant="outlined" />
                    </div>
                </Col>
                <Col md={4}>
                        <div className='my-4'>
                            <TextField fullWidth required type="text" id="metaTitle" value={metaTitle} onChange={(e: any) => setMetaTitle(e.target.value)} label="Meta Title" variant="outlined" />
                        </div>
                        </Col>
                <Col md={4}>
                        <div className='my-4'>
                            <TextField fullWidth required type="text" id="metaDescription" value={metaDescription} onChange={(e: any) => setMetaDescription(e.target.value)} label="Meta Description" variant="outlined" />
                        </div>
                        </Col>
                        <Col md={4}>
                    <div className='my-4'>
                        <TextField fullWidth type="text" required id="customurl" value={customUrl} onChange={(e: any) => setCustomUrl(e.target.value)} label="Custom URL" variant="outlined" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className='my-4'>
                        <TextField fullWidth type="text" required id="keywords" value={keywords} onChange={(e: any) => setKeywords(e.target.value)} label="Keywords" variant="outlined" />
                    </div>
                </Col>
                <Col md={12}>

                <div className="my-4">
            <ReactQuill
              theme="snow"
              id="message"
              className="h-100"
              value={message}
              onChange={setMessage}
              modules={modules}
            />
          </div>
                        </Col>
                <Col md={12}>
                        <div>
                            <label htmlFor="img">Update Image:</label> {imgPerc > 0 && "Uploading: " + imgPerc + "%"}

                            <input
                                type="file"
                                accept="image/*"
                                id="img"
                    
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

export default UpdateBlog;