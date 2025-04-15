'use client'
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard, MdDns, MdLibraryAdd } from "react-icons/md";
import { usePathname } from "next/navigation";

const AdminNavBar = () => {
    const pathname = usePathname()
    return ( <div id="admin">
        <Container>
            <Row className="mt-3" >
                <Col md={2}>
                <Link href={'-'} className="text-primary">
                    <AdminNavItem label="summary" icon={MdDashboard} selected={pathname === '-'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'-/banner'} className="text-primary">
                    <AdminNavItem label="Banner" icon={MdDns} selected={pathname === '-/banner'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'-/exam'} className="text-primary">
                    <AdminNavItem label="Exam" icon={MdDns} selected={pathname === '-/exam'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'-/admission'} className="text-primary">
                    <AdminNavItem label="Admission" icon={MdDns} selected={pathname === '-/admission'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'-/coaching'} className="text-primary">
                    <AdminNavItem label="Coaching" icon={MdDns} selected={pathname === '-/coaching'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'-/career'} className="text-primary">
                    <AdminNavItem label="Career" icon={MdDns} selected={pathname === '-/career'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'-/contact'} className="text-primary">
                    <AdminNavItem label="Contact" icon={MdDns} selected={pathname === '-/contact'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'-/employer'} className="text-primary">
                    <AdminNavItem label="Employer" icon={MdDns} selected={pathname === '-/employer'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'-/form'} className="text-primary">
                    <AdminNavItem label="Form" icon={MdDns} selected={pathname === '-/form'} />
                </Link>
                </Col>
            </Row>
        </Container>

    </div> );
}
 
export default AdminNavBar;