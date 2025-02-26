'use client'

import { Container, Row, Col } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import toast from 'react-hot-toast';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";

interface SchoolFormProps {
    data: string | undefined
}

const SchoolForm: React.FC<SchoolFormProps> = ({ data }) => {
    const [gender, setGender] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                    <form className='bg-light rounded shadow m-1 p-4'>
                        <div className="text-center">
                            <p className="fs-2 text-primary">Compare & Select from 200+ </p>
                            <p className="fs-4 text-secondary">Best School Admission in {data} Class </p>
                        </div>
                       
                            <div className="d-flex justify-content-between">
                                <TextField fullWidth
                                    name="user_name"
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
                                    name="user_contact"
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
                                    name="user_email"
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
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Female</MenuItem>
                                        <MenuItem value={20}>Male</MenuItem>
                                        <MenuItem value={30}>Other</MenuItem>
                                    </Select>
                                </FormControl></div>
                            <div className="d-flex justify-content-center align-items-center">

                                <TextField
                                    fullWidth
                                    name="user_state"
                                    label="State"
                                    multiline
                                    variant="outlined"
                                    className='m-1 my-3'
                                    type='text'
                                    autoComplete='off'
                                    required
                                />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker label="Date of Birth" name="startDate" />
                                </LocalizationProvider>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <TextField
                                    fullWidth
                                    name="user_city"
                                    label="City"
                                    multiline
                                    variant="outlined"
                                    className='m-1 my-3'
                                    type='text'
                                    autoComplete='off'
                                    required
                                />

                                <TextField fullWidth
                                    name="specilization"
                                    className='m-1 my-3'
                                    label="Specilization"
                                    variant="outlined"
                                    type='text'
                                    autoComplete='off'
                                    required
                                /></div>
                                <div className="d-flex justify-content-center align-items-center">
                            <Button type='submit' variant="contained" color="primary" className='mt-4'>Find Best School</Button></div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SchoolForm;