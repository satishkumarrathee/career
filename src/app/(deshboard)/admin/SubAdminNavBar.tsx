'use client'
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard, MdDns } from "react-icons/md";
import { usePathname } from "next/navigation";

const SubAdminNavBar = () => {
    const pathname = usePathname()
    return ( <div id="admin">
        <Container>
            <Row className="mt-3" >
                <Col md={2}>
                <Link href={'/admin'} className="text-primary">
                    <AdminNavItem label="summary" icon={MdDashboard} selected={pathname === '/admin'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'/admin/exam'} className="text-primary">
                    <AdminNavItem label="Exam" icon={MdDns} selected={pathname === '/admin/exam'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'/admin/admission'} className="text-primary">
                    <AdminNavItem label="Admission" icon={MdDns} selected={pathname === '/admin/admission'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'/admin/coaching'} className="text-primary">
                    <AdminNavItem label="Coaching" icon={MdDns} selected={pathname === '/admin/coaching'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'/admin/career'} className="text-primary">
                    <AdminNavItem label="Career" icon={MdDns} selected={pathname === '/admin/career'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'/admin/contact'} className="text-primary">
                    <AdminNavItem label="Contact" icon={MdDns} selected={pathname === '/admin/contact'} />
                </Link>
                </Col>
            </Row>
        </Container>

    </div> );
}
 
export default SubAdminNavBar;