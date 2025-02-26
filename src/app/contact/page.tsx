'use client'
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Heading from '@/app/components/Heading';
import { useRouter } from 'next/navigation';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import { MdSend } from "react-icons/md";
import { FormControl, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material';
import TopicIcon from '@mui/icons-material/Topic';
import DistrictState from "@/app/utils/state.json";

const Contact = () => {
  const router = useRouter()
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [state, setState] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [district, setDistrict] = useState();
  const [isValid, setIsValid] = useState(false);
  const [isValidContact, setIsValidContact] = useState(false);

  const handleEmail = (event:any) => {
    setEmail(event.target.value);
    setIsValid(validateEmail(event.target.value));
  };

  const handleContact = (event:any) => {
    const input = event.target.value;
    setContact(input);
    setIsValidContact(validateMobile(input));
  };


  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  

  const validateMobile = (number: string): boolean => {
    // Simple mobile number validation
    const regex = /^\d{10}$/;
    return regex.test(number);
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, contact, state, email, subject, message, district }),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (response.ok) {
      router.refresh();
      toast.success('Query Sent')
    } else {
      toast.error("Something went wrong")
    }
  };

  return (
    <>
      <Container className='my-5'>
        <Row>
          <Col md={12}>
            <div>
              <Heading title='CONTACT' name='US' />
            </div>
          </Col>
          <Col md={6}>

            <p className='fw-light fs-5 my-3 p-2' style={{ textAlign: 'justify' }}>Thank you for your interest in Career Definer. We appreciate your feedback, questions, and suggestions. Please don't hesitate to contact us using the provided information.</p>
            <div className='d-flex justify-content-center align-items-center'>
              <Image src="/contact-us.png" alt='contact-us' className='p-3' fluid />
            </div>
          </Col>


          <Col md={6} >
            <form className='bg-blody shadow m-1 p-4' id='myForm' onSubmit={handleSubmit}>
              <div>
                <Heading title='FILL THE' name='FORM' />
              </div>
              <div className='d-flex justify-content-between'>  <TextField fullWidth
                value={name} onChange={(e: any) => setName(e.target.value)}
                label="Full Name"
                multiline
                variant="outlined"
                className='m-1 my-3'
                type='text'
                autoComplete='off'
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">< PersonIcon/></InputAdornment>
                  ),
                }}
              />
                <TextField fullWidth
                  value={contact}
                  onChange={handleContact}
                  label="Contact"
                  helperText={!isValid && contact !== '' && ''}
                  multiline
                  variant="outlined"
                  className='m-1 my-3'
                  type='tel'
                  autoComplete='off'
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"> +91 </InputAdornment>
                    ),
                  }}
                /></div>
              <div className='d-flex justify-content-between'>   <TextField fullWidth
                value={email} 
                onChange={handleEmail}
                  label="Email"
                  // error={!isValid && email !== ""}
                  helperText={
                    !isValid && email !== "" && ""
                  }
                multiline
                variant="outlined"
                className='m-1 my-3'
                type='email'
                autoComplete='off'
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">< EmailIcon/></InputAdornment>
                  ),
                }}
              />
                 <FormControl fullWidth  className='m-1 my-3' >
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
                </div>
              <div className='d-flex justify-content-between'> 
              <FormControl fullWidth  className='m-1 my-3'>
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
                <TextField fullWidth
                  value={subject} onChange={(e: any) => setSubject(e.target.value)}
                  label="Subject"
                  multiline
                  variant="outlined"
                  className='m-1 my-3'
                  type='text'
                  autoComplete='off'
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">< TopicIcon/></InputAdornment>
                    ),
                  }}
                /></div>

              <TextField fullWidth
                value={message} onChange={(e: any) => setMessage(e.target.value)}
                className='m-1 my-3'
                label="Message"
                multiline
                rows={4}
                type='text'
                autoComplete='off'
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">< MessageIcon/></InputAdornment>
                  ),
                }}
              />
              <div className='d-flex align-items-center justify-content-center mt-4'>
                <Button type='submit' variant="contained" color='warning' disabled={!isValid || !isValidContact} endIcon={<MdSend/>}>Submit</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container >
      <Container >
        <Row>
          <Col xs={12}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.0458287134325!2d76.82606471081995!3d30.660837974513232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f9514e627b76f%3A0x61d8546cee9e8d7a!2sCareer%20Definer!5e0!3m2!1sen!2sin!4v1714547839301!5m2!1sen!2sin"width="100%" height="450"loading="lazy"></iframe>
          </Col>
        </Row>
      </Container >
    </>
  )
}
export default Contact;
