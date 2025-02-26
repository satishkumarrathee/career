'use client'
import Button from '@mui/material/Button';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '@/app/libs/firebase';
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Container, Col, Row } from 'react-bootstrap';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import DistrictState from "@/app/utils/state.json";
import { FormControl, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material';

const ManageUniversity = () => {
    const router = useRouter();
    const [img, setImg] = useState<File | null>(null);
    const [imgPerc, setImgPerc] = useState(0);
    const [inputs, setInputs] = useState<Record<string, string>>({});
    const [name, setName] = useState();
    const [contact, setContact] = useState();
    const [email, setEmail] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [state, setState] = useState();
    const [district, setDistrict] = useState();
    const [pincode, setPincode] = useState();
 



    //Firebase Image Data Start
    useEffect(() => {
        img && uploadFile(img, "imgUrl");
    }, [img]);

    const uploadFile = (file: File, fileType: string) => {
        const storage = getStorage(app);
        const folder = fileType === "imgUrl" ? "universityImages/" : "universityVideos/";
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
        let response = await fetch("/api/university", {
            method: "POST",
            body: JSON.stringify({ name, contact, email, address1,address2,state,district,pincode, ...inputs }),
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (response.ok) {
            toast.success('University Added')
            router.refresh();
        } else {
            toast.error("Something went wrong")
        }
    };


    return (
        <Container>
            <Row className='p-3 border bg-body my-3'>
                <Col md={12}>
                    <p className='fs-4 text-primary text-center'>University / College Register Form</p>
                </Col>
                <hr />
                        <Col md={6} className='my-3'>
                            <TextField fullWidth type="text" required id="name" value={name} onChange={(e: any) => setName(e.target.value)} label="University Name" variant="outlined"   InputProps={{ startAdornment: <InputAdornment position="start"><SchoolIcon /></InputAdornment>}}/>
                        </Col>
                        <Col md={6} className='my-3'>
                            <TextField fullWidth type="text" required id="contac" value={contact} onChange={(e: any) => setContact(e.target.value)} label="University Contact Number" variant="outlined"  InputProps={{ startAdornment: <InputAdornment position="start"> +91 </InputAdornment>}}/>
                        </Col>
                        <Col md={6} className='my-3'>
                            <TextField fullWidth type="text" required id="email" value={email} onChange={(e: any) => setEmail(e.target.value)} label="University Email Address" variant="outlined"  InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>}}/>
                        </Col>
                        <Col md={6} className='my-3'>
                            <TextField fullWidth type="text" required id="address1" value={address1} onChange={(e: any) => setAddress1(e.target.value)} label="Address 1" variant="outlined"  InputProps={{ startAdornment: <InputAdornment position="start"><LocationOnIcon /></InputAdornment>}}/>
                        </Col>
                        <Col md={6} className='my-3'>
                            <TextField fullWidth type="text" id="address2" value={address2} onChange={(e: any) => setAddress2(e.target.value)} label="Address 2 Optional" variant="outlined"  InputProps={{ startAdornment: <InputAdornment position="start"><NotListedLocationIcon /></InputAdornment>}}/>
                        </Col>
                        <Col md={6} className='my-3'>
                        <FormControl fullWidth >
                  <InputLabel id="demo-simple-select-label" >State</InputLabel>
                  <Select
                  
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    label="State"
                    required
                    onChange={(e: any) => setState(e.target.value)}
                  >
                    {DistrictState.map((item: any) => (
                      <MenuItem value={item.state} key={item.state}>
                        {item.state}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                        </Col>
                        <Col md={6} className='my-3'>
                        <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    District
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={district}
                    label="District"
                    required
                    disabled={!state}
                    onChange={(e: any) => setDistrict(e.target.value)}
                  >
                    {DistrictState.filter((item) => item.state === state).map(
                      (item) => (
                        item.districts.map((data) => (
                          <MenuItem value={data} key={data}>
                            {data}
                          </MenuItem>))
                      )
                    )}
                  </Select>
                </FormControl>
                        </Col>
                        <Col md={6} className='my-3'>
                            <TextField fullWidth type="text" required id="pincode" value={pincode} onChange={(e: any) => setPincode(e.target.value)} label="Pincode" variant="outlined"  InputProps={{ startAdornment: <InputAdornment position="start"><AssistantDirectionIcon /></InputAdornment>}}/>
                        </Col>
                        {/* <div >
                           <StateDistrictSelect
                            />
                        </div> */}
                        <div className='my-3'>
                            <label htmlFor="img">University Banner :</label> {imgPerc > 0 && "Uploading: " + imgPerc + "%"}

                            <input
                                type="file"
                                accept="image/*"
                                id="img"
                                required
                                onChange={(e: any) => setImg(e.target.files?.[0])}
                            />
                        </div >
                        <div className='d-flex align-items-center justify-content-center my-3' >
                            <Button onClick={handleSubmit} variant="contained" color='primary'>Submit</Button>
                        </div>
                
             
            </Row>
        </Container>
    );
}

export default ManageUniversity;