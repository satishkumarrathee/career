'use client';
import AdminHeading from '@/app/components/AdminHeading';
import { useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import PlaceIcon from '@mui/icons-material/Place';
import DomainIcon from '@mui/icons-material/Domain';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ShowEmployer = () => {
  const router = useRouter();
  const [employerData, setEmployerData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('/api/employer')
      .then((response) => {
        setEmployerData(response.data.data);
      })
      .catch((error: any) => {
        const errorMessage = error.response
          ? error.response.data.message
          : error.message;
        toast.error(errorMessage);
      });
  }, [employerData]);

  //Call Delete API

  const deleteEmployer = async (id: any) => {
    if (confirm('Do you want to Delete ?') == true) {
      let blog = await fetch(`/api/employer/${id}`, {
        method: 'Delete',
        cache: 'no-cache',
      });
      blog = await blog.json();
      router.refresh();
    }
    null;
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div>
            <AdminHeading title="Employer Post Job List" center />
          </div>
        </Col>
        <hr />
      </Row>
      <Row>
        {employerData.map((item) => (
          <Col md={4} className="my-2">
            <div className="border rounded border-primary p-3 bg-light text-primary">
              <div className="mx-2">
                <p><span className='fw-bold'> Organization Name :</span> {item.name}</p>
              </div>
              <div className="mx-2">
                <p><span className='fw-bold'>Role :</span> {item.role}</p>
              </div>

              <div className="mx-2">
                <p><span className='fw-bold'>Designation :</span> {item.designation}</p>
              </div>
              <div className="mx-2">
                <p><span className='fw-bold'>Job Type :</span> {item.typeJob}</p>
              </div>
              <div className="mx-2">
                <p><span className='fw-bold'>State :</span> {item.state}</p>
              </div>
              <div className="mx-2">
                <p><span className='fw-bold'>District :</span> {item.district}</p>
              </div>

              <div className="mx-2">
                <p><span className='fw-bold'>Location Type :</span> {item.location}</p>
              </div>
              <div className="mx-2">
                <p><span className='fw-bold'>Pay Type :</span> {item.payType}</p>
              </div>
              <div className="mx-2">
                <p><span className='fw-bold'>Additional Perks :</span></p>
                <ul>
                    <li ><span className='fw-bold'>Flexible Working Hours :</span>  <span className={item.flexible ? 'text-success' : 'text-danger'}>{item.flexible ? 'Yes' : 'No'}</span> </li>
                    <li ><span className='fw-bold'>Weekly Payout :</span> <span className={item.weeklyPayout ? 'text-success' : 'text-danger'}> {item.weeklyPayout ? 'Yes' : 'No'}</span> </li>
                    <li ><span className='fw-bold'>Overtime Pay :</span>  <span className={item.overtimePay ? 'text-success' : 'text-danger'}> {item.overtimePay ? 'Yes' : 'No'}</span> </li>
                    <li ><span className='fw-bold'>Joining Bonus :</span> <span className={item.joiningBonus ? 'text-success' : 'text-danger'}> {item.joiningBonus ? 'Yes' : 'No'}</span> </li>
                    <li ><span className='fw-bold'>Annual Bonus :</span> <span className={item.annualBonus ? 'text-success' : 'text-danger'}> {item.annualBonus ? 'Yes' : 'No'}</span> </li>
                    <li ><span className='fw-bold'>PF :</span> <span className={item.PF ? 'text-success' : 'text-danger'}> {item.PF ? 'Yes' : 'No'}</span> </li>
                    <li ><span className='fw-bold'>Travel Allowance (TA) :</span>  <span className={item.travelAllowance ? 'text-success' : 'text-danger'}>{item.travelAllowance ? 'Yes' : 'No'}</span> </li>
                    <li ><span className='fw-bold'>Petrol Allowance :</span>  <span className={item.petrolAllowance ? 'text-success' : 'text-danger'}>{item.petrolAllowance ? 'Yes' : 'No'}</span> </li>
                    <li ><span className='fw-bold'>Mobile Allowance :</span> <span className={item.mobileAllowance ? 'text-success' : 'text-danger'}> {item.mobileAllowance ? 'Yes' : 'No'}</span> </li>
                    <li ><span className='fw-bold'>Internet Allowance :</span> <span className={item.internetAllowance ? 'text-success' : 'text-danger'}> {item.internetAllowance ? 'Yes' : 'No'}</span> </li>
                    <li ><span className='fw-bold'>Laptop :</span>  <span className={item.laptop ? 'text-success' : 'text-danger'}>{item.laptop ? 'Yes' : 'No'}</span> </li>
                    <li ><span className='fw-bold'>Health Allowance :</span> <span className={item.healthAllowance ? 'text-success' : 'text-danger'}> {item.healthAllowance ? 'Yes' : 'No'}</span> </li>
                    
                </ul>
              </div>
              <div className="mx-2">
                <p><span className='fw-bold'>Is there any joining fee or deposit required from the candidate :</span> <span className={item.deposit ? 'text-success' : 'text-danger'}> {item.deposit ? 'Yes' : 'No'}</span> </p>
              </div>

              <div className="mx-2 float-end">
                <DeleteForeverIcon
                  onClick={() => {
                    deleteEmployer(item._id);
                  }}
                  color="primary"
                  fontSize="large"
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShowEmployer;
