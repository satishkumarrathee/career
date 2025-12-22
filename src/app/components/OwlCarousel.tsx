'use client'
import React, { useState } from 'react';
import Images from '@/app/utils/college.json';
import { Button } from '@mui/material';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Heading from './Heading';
import Link from 'next/link';
import TruncateText from './Truncate';
const IndexPage = () => {
  const [images, setImages] = useState(Images);
  const [clicked, setClicked] = useState(false);
  const loadMoreImages = () => {
    if (clicked) {
      return;
    }
    setClicked(true);
    const moreImages = [
      {
        name: "ANGRAU"
      },
      {
        name: "Apeejay Stya University"
      },
      {
        name: "Ashoka University"
      },
      {
        name: "Assam Agricultural University"
      },
      {
        name: "Baba Mast Nath University"
      },
      {
        name: "Babu Banarasi Das University"
      },
      {
        name: "Bareilly International University"
      },
      {
        name: "Bennett University"
      },
      {
        name: "BML Munjal University"
      },
      {
        name: "CT University"
      },
      {
        name: "D.A.V University"
      },
      {
        name: "Desh Bhagat University"
      },
      {
        name: "Doon University"
      },
      {
        name: "Dr. Y.S.Parmar University of Horticulture & Forestry"
      },
      {
        name: "Era University"
      },
      {
        name: "F.S. University"
      },
      {
        name: "G L A University"
      },
      {
        name: "G. D. Goenka University"
      },
      {
        name: "G.B.Pant University of Agriculture & Technology"
      },
      {
        name: "Galgotias University"
      },
      {
        name: "Geeta University"
      },
      {
        name: "GNA University"
      },
      {
        name: "Guru Kashi University"
      },
      {
        name: "Hemvati Nandan Bahuguna Medical Education University"
      },
      {
        name: "Himachal Pardesh Agriculture University"
      },
      {
        name: "Himachal Pradesh National Law University"
      },
      {
        name: "Himachal Pradesh Technical University"
      },
      {
        name: "Himachal Pradesh University"
      },
      {
        name: "IFTM University"
      },
      {
        name: "IILM University"
      },
      {
        name: "IILM University"
      },
      {
        name: "NIILM University"
      },
      {
        name: "Noida International University"
      },
      {
        name: "Om Sterling Global University"
      },
      {
        name: "PDM University"
      },
      {
        name: "Plaksha University"
      },
      {
        name: "Rama University"
      },
      {
        name: "Rayat Bahra University"
      },
      {
        name: "RIMT University"
      },
      {
        name: "Rishihood University"
      },
      {
        name: "Sanskaram University"
      },
      {
        name: "Sanskriti University"
      },
      {
        name: "Sant Baba Bhag Singh University"
      },
      {
        name: "Sardar Patel University Mandi"
      },
      {
        name: "SDGI Global University"
      },
      {
        name: "Sharda University"
      },
      {
        name: "Shobhit University"
      },
      {
        name: "shree guru gobind singh tricentenary university"
      },
      {
        name: "Shri Ramswaroop Memorial University"
      },
      {
        name: "Shri Venkateshwara University"
      },
      {
        name: "Soban Singh Jeena University"
      },
      {
        name: "Sri Dev Suman Uttarakhand Vishwavidyalaya"
      },
      {
        name: "Sri Guru Granth Sahib World University"
      },
      {
        name: "sri guru ram das university of health sciences"
      },
      {
        name: "SRM University"
      },
      {
        name: "Starex University"
      },
      {
        name: "Sushant University (Formerly Ansal University)"
      },
      {
        name: "Swami Vivekananda Subharti University"
      },
      {
        name: "T. S. Mishra University"
      },
      {
        name: "Teerthanker Mahaveer University"
      },
      {
        name: "The Glocal University"
      },
      {
        name: "The Northcap University ( Formerly ITM University)"
      },
      {
        name: "United University"
      },
      {
        name: "Uttarakhand Ayurved University"
      },
      {
        name: "Uttarakhand Open University"
      },
      {
        name: "Uttarakhand Sanskrit University"
      },
      {
        name: "Uttarakhand Technical University"
      },
      {
        name: "Varun Arjun University"
      },
      {
        name: "Veer Chandra Singh Garhwali Uttarakhand University of Horticulture & Forestry"
      },
      {
        name: "World University Of Design"
      }
    ];
    setImages(prevImages => [...prevImages, ...moreImages]);
  };

  return (
    <Container>
      <Row>
        <div>
        <Heading title="TOP " name="RANKING UNIVERSITY" />
        </div>
      {/* {images.map((item, index) => (
        <Col xl={2} md={3}>
       <Link href={'/form'}>  <div className='border p-2 my-2 d-flex align-items-center justify-content-center flex-column'>  <Image key={index} src={`/logo/${item.name}.jpg`} alt={item.name} width={140} height={70} />
       <p className='text-center' style={{fontSize:'12px'}}><TruncateText itemName={item.name}/> </p></div></Link> 
        </Col>
      ))}
       <Col md={12}>
       <div className='d-flex align-content-center justify-content-center my-3'>
      <Button variant='outlined' color='primary' disabled={clicked} onClick={loadMoreImages}>see all</Button>
      </div>
      </Col> */}

      {images.map((item, index) => (
  <Col key={index} xl={2} md={3} sm={6} xs={12} className="mb-4">
    <Link href={'/form'} className="text-decoration-none">
      <div 
        className="university-card border bg-white p-3 d-flex align-items-center justify-content-center flex-column text-center"
      >
        <Image
          src={`/logo/${item.name}.jpg`}
          alt={item.name}
          width={140}
          height={70}
          className="mb-2"
        />
        <p className="text-primary mb-0" style={{ fontSize: '12px' }}>
          <TruncateText itemName={item.name} />
        </p>
      </div>
    </Link>
  </Col>
))}
 <Col md={12}>
       <div className='d-flex align-content-center justify-content-center my-3'>
      <Button variant='outlined' color='primary' disabled={clicked} onClick={loadMoreImages}>see all</Button>
      </div>
      </Col>
      </Row>
    </Container>
  );
};

export default IndexPage;
