import { Col, Container, Row } from "react-bootstrap";
import Heading from "./Heading";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DiamondIcon from '@mui/icons-material/Diamond';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import LanguageIcon from '@mui/icons-material/Language';

const menuItems = [
    {
        name: "We Put You First",
        icon: MenuBookIcon,
        desc: "Our experienced counsellors and service team will work closely with you to ensure a seamless and a stress-free admission and visa process."
    },
    {
        name: "Experience",
        icon: EmojiObjectsIcon,
        desc: "With over 12 years of experience, our counsellors can help you figure out your next move."
    },
    {
        name: "Passion",
        icon: DiamondIcon,
        desc: "We are passionate in our bid to help students make better academic decisions that could change their lives forever."
    },
    {
        name: "Affiliations",
        icon: NotificationsIcon,
        desc: "Our affiliations with over 700 universities worldwide ensure that you are not short of choices."
    },
    {
        name: "Our Services",
        icon: QueueMusicIcon,
        desc: "Our services are designed to support you from the moment of initial counselling till completion of your admissions."
    },
    {
        name: "Free of Cost",
        icon: LanguageIcon,
        desc: "No charges were taken from 95% of our students. The remaining 5% paid for special customised services."
    }

]

const Choose = () => {
    return (
        <Container className="mb-5">
            <Row>
                <Col md={12}>

                    <Heading title="WHY" name="CHOOSE US" /> </Col>
                {menuItems.map(({ name, desc, icon: IconComponent }) => (
                    <Col key={name} md={4} sm={6} className="my-2">
                        <div className="h-100 d-flex border rounded text-light bg-primary">
                            <div className="mx-2 p-2">
                                <IconComponent style={{ fontSize: '60px', color: "white" }} />
                            </div>
                            <div className="p-3">
                                <h4>{name}</h4>
                                <p className="fw-light" style={{ textAlign: 'justify' }}>{desc}</p>
                            </div>

                        </div>
                    </Col>

                ))

                }
            </Row>
        </Container>
    );
}

export default Choose;