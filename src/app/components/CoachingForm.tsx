'use client'
import { Container, Row, Col } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import toast from "react-hot-toast";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import { useRouter } from "next/navigation";
import DistrictState from "@/app/utils/state.json";
import { FormControl, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material';

interface CoachingFormProps {
    coaching: string | undefined
}

const CoachingForm: React.FC<CoachingFormProps> = ({ coaching }) => {
    const router = useRouter()
    const [gender, setGender] = useState('');
    const [name, setName] = useState();
    const [contact, setContact] = useState();
    const [email, setEmail] = useState();
    const [state, setState] = useState();
    const [district, setDistrict] = useState();
    const [dateBirth, setDateOfBirth] = useState('2022-04-17')

    const dateOfBirth = new Date(dateBirth).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    });

    const handleGender = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let response = await fetch("/api/coaching", {
            method: "POST",
            body: JSON.stringify({ gender, name, contact, coaching, email, state, district, dateOfBirth }),
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (response.ok) {
            toast.success('Coaching Form Submitted')
            router.push('/');
        } else {
            toast.error("Something went wrong")
        }
    };
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <form className='bg-light rounded shadow m-1 p-4' onSubmit={handleSubmit}>
                            <div className="text-center">
                                <p className="fs-2 text-primary">Compare & Select from 300+ </p>
                                <p className="fs-4 text-secondary">Discovering the Best {coaching} Preparation Institutes in India</p>
                            </div>

                            <div className="d-flex justify-content-between">
                                <TextField fullWidth
                                    value={name} onChange={(e: any) => setName(e.target.value)}
                                    label="Full Name"
                                    multiline
                                    variant="outlined"
                                    className='m-1 my-3'
                                    type='text'
                                    autoComplete='off'
                                    required
                                />
                                <TextField
                                    fullWidth
                                    value={contact} onChange={(e: any) => setContact(e.target.value)}
                                    InputProps={{ startAdornment: <InputAdornment position="start"> +91 </InputAdornment> }}
                                    label="Contact"
                                    multiline
                                    variant="outlined"
                                    className='m-1 my-3'
                                    type='tel'
                                    autoComplete='off'
                                    required
                                /> </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <TextField
                                    fullWidth
                                    value={email} onChange={(e: any) => setEmail(e.target.value)}
                                    label="Email"
                                    multiline
                                    variant="outlined"
                                    className='m-1 my-3'
                                    type='email'
                                    autoComplete='off'
                                    required
                                />

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={gender}
                                        label="Gender"
                                        onChange={handleGender}
                                    >
                                        <MenuItem value={"Female"}>Female</MenuItem>
                                        <MenuItem value={"Male"}>Male</MenuItem>
                                        <MenuItem value={"Other"}>Other</MenuItem>
                                    </Select>
                                </FormControl></div>
                                <div className="d-flex justify-content-between  my-3">
              <FormControl fullWidth >
                  <InputLabel id="demo-simple-select-label" >State</InputLabel>
                  <Select
                  
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    className="m-1"
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
                 <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    District
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={district}
                    label="District"
                    className="m-1"
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
                </div>
                            <div className="d-flex justify-content-center align-items-center">


                                <TextField fullWidth
                                    name="exam name"
                                    className='m-1 my-3'
                                    label="Exam Name"
                                    variant="outlined"
                                    type='text'
                                    value={coaching}
                                    autoComplete='off'
                                    required
                                    disabled
                                />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>

                                    <DatePicker label="Date of Birth" name="startDate" onChange={(value: any) => setDateOfBirth(value)} className='m-1 my-3' />

                                </LocalizationProvider>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <Button type='submit' variant="contained" color="primary" className='mt-4'>Find Best Institute</Button></div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CoachingForm;