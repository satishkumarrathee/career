'use client'
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard, MdDns, MdLibraryAdd } from "react-icons/md";
import { usePathname } from "next/navigation";

const SuperAdminNavBar = () => {
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
                <Link href={'/admin/blog'} className="text-primary">
                    <AdminNavItem label="Blog" icon={MdLibraryAdd} selected={pathname === '/admin/blog'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'/admin/banner'} className="text-primary">
                    <AdminNavItem label="Banner" icon={MdDns} selected={pathname === '/admin/banner'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'/admin/university'} className="text-primary">
                    <AdminNavItem label="University" icon={MdDns} selected={pathname === '/admin/university'} />
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
                <Col md={2}>
                <Link href={'/admin/popup'} className="text-primary">
                    <AdminNavItem label="Popup" icon={MdDns} selected={pathname === '/admin/popup'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'/admin/news'} className="text-primary">
                    <AdminNavItem label="News" icon={MdDns} selected={pathname === '/admin/news'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'/admin/employer'} className="text-primary">
                    <AdminNavItem label="Employer" icon={MdDns} selected={pathname === '/admin/employer'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'/admin/counsellor'} className="text-primary">
                    <AdminNavItem label="Counsellor" icon={MdDns} selected={pathname === '/admin/counsellor'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'/admin/form'} className="text-primary">
                    <AdminNavItem label="Form" icon={MdDns} selected={pathname === '/admin/form'} />
                </Link>
                </Col>
                <Col md={2}>
                <Link href={'/admin/user'} className="text-primary">
                    <AdminNavItem label="User" icon={MdDns} selected={pathname === '/admin/user'} />
                </Link>
                </Col>
            </Row>
        </Container>

    </div> );
}
 
export default SuperAdminNavBar;