'use client'
import { Container, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Youtube from '@mui/icons-material/YouTube';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/X';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Admission from '@/app/utils/admissioncourse.json'
import Career from '@/app/utils/job.json'
import Exam from '@/app/utils/exam.json'


const Footer = () => {
  return (
    <footer className='text-light bg-primary' id='footer' >
      <Container >
        <Row >

          <Col md={3}>
            <ul className='mt-3'>
              <h5>Admission</h5>
              {
                Admission.map((item) => (
                  <Link href={`/admission/${item.id}`}><li className='fw-light'>{item.name}</li></Link>
                ))
              }


            </ul>
          </Col>

          <Col md={3}>
            <ul className='mt-3'>
              <h5>Exam</h5>
              {
                Exam.map((item) => (
                  <Link href={`/exam/${item.id}`}><li className='fw-light'>{item.name}</li></Link>
                ))
              }
            </ul>
          </Col>
          <Col md={3}>
            <ul className='mt-3'>
              <h5>Career</h5>
              {
                Career.map((item) => (
                  <Link href={`/career/${item.id}`}><li className='fw-light'>{item.name}</li></Link>
                ))
              }
            </ul>
          </Col>
          <Col md={3}>
            <ul className='mt-3'>
              <div className='my-4'>
                <h6 className='fw-bold'>Head Office Address</h6>
                <li className='fw-light fs-6'><span><HomeWorkIcon /></span> SCO-10, 2nd Floor, Kalgidhar Enclave, Baltana, Zirakpur, Mohali, Punjab, India 140604</li>
              </div>
              <div className='mb-3'>
                <h6 className='fw-bold'>Branch Office Address</h6>
                <li className='fw-light fs-6'><span><HomeWorkIcon /></span> 2nd Floor, Sheetal Complex, D-Park Model Town, Rohtak, Haryana, India, 124001</li>
              </div>
              <h6 className='fw-bold'>Contact Details</h6>
              <div>
                <li className='fw-light'><span><LocalPhoneIcon /></span> 8699986933</li>
                <li className='fw-light m-0'><span><EmailIcon /></span> info@careerdefiner.com</li>
              </div>
            </ul>



          </Col>

          <Col xs={12}>
            <div>
              <Link href={'https://www.facebook.com/careerdefinerindia'} target='_blank'><Facebook fontSize='medium' className='m-1 text-light' /></Link>
              <Link href={'https://www.youtube.com/@careerdefiner1'} target='_blank'><Youtube color='error' fontSize='medium' className='m-1' /></Link>
              <Link href={'https://twitter.com/career_definer'} target='_blank'><Twitter fontSize='medium' className='m-1 text-dark' /></Link>
              <Link href={'https://www.instagram.com/careerdefiner1'} target='_blank'><Instagram color='error' fontSize='medium' className='m-1' /></Link>
              <Link href={'https://www.linkedin.com/company/career-definer'} target='_blank'><LinkedIn fontSize='medium' className='m-1 text-light' /></Link>

            </div>
          </Col>
          <Col xs={12}>
            <hr />
            <h6 className='fw-light' style={{ color: 'white', textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>Copyrights ©2024 Career Definer all rights reserved.</h6>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
