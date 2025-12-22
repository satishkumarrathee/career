'use client'
import { Col, Container, Row } from "react-bootstrap";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ScienceIcon from '@mui/icons-material/Science';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PublicIcon from '@mui/icons-material/Public';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import TheatersIcon from '@mui/icons-material/Theaters';
import GavelIcon from '@mui/icons-material/Gavel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalculateIcon from '@mui/icons-material/Calculate';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import BrushIcon from '@mui/icons-material/Brush';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import DrawIcon from '@mui/icons-material/Draw';
import Heading from "./Heading";
import Link from "next/link";

const menuItems = [
    {
        "id": "engineering",
        "name": "Engineering",
        icon :EngineeringIcon
    },
    {
        "id": "management",
        "name": "Management",
       icon : ManageAccountsIcon
    },
    {
        "id": "medical",
        "name": "Medical",
        icon :LocalHospitalIcon
    },
    {
        "id": "commerce-and-banking",
        "name": "Commerce and Banking",
        icon :AccountBalanceIcon
    },
    {
        "id": "hotel-management",
        "name": "Hotel Management",
        icon :HouseSidingIcon
    },
    {
        "id": "information-technology",
        "name": "Information Technology",
        icon :PsychologyAltIcon
    },
    {
        "id": "arts-and-humanities",
        "name": "Arts and Humanities",
        icon :DesignServicesIcon
    },
    {
        "id": "mass-communication",
        "name": "Mass Communication",
        icon :ConnectWithoutContactIcon
    },
    {
        "id": "nursing",
        "name": "Nursing",
        icon :VaccinesIcon
    },
    {
        "id": "agriculture",
        "name": "Agriculture",
        icon :AgricultureIcon
    },
    {
        "id": "law",
        "name": "Law",
        icon :GavelIcon
    },
    {
        "id": "paramedical",
        "name": "Paramedical",
        icon :MedicalServicesIcon
    },
    {
        "id": "dental",
        "name": "Dental",
        icon :ArchitectureIcon
    },
    {
        "id": "performing-arts",
        "name": "Performing Arts",
        icon :DrawIcon
    },
    {
        "id": "pharmacy",
        "name": "Pharmacy",
        icon :MedicalInformationIcon
    },
    {
        "id": "design",
        "name": "Design",
        icon :BrushIcon
    }
];

const Courses: React.FC = () => {
    return (
        <Container className="my-5">
            <Row className="">
                <Heading title="BROWSE " name="OUR COURSES" />
                {menuItems.map(({ name,id, icon: IconComponent }) => (
                 <Col key={name} xl={3} md={4} className="my-3">
                       <Link href={`/admission/college/${id}`}>   <div id="shed" className="text-center border-primary shadow h-100  p-3 bg-body text-primary rounded-4">
                            <div>
                                <IconComponent style={{ fontSize: '50px' }} />
                            </div>
                            <div className="fw-light my-3">
                                <p style={{ fontSize: "13px" }}>{name}</p>
                            </div>
                        </div></Link> 
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Courses;
