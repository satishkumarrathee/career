"use client";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import { Button } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "next-auth/react";
import { MdSend } from "react-icons/md";

interface NavbarProps {
  email: string | null | undefined;
  name: string | null | undefined;
}

const NavbarData: React.FC<NavbarProps> = ({ email,name }) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    const callbackUrl = `${window.location.origin}/login`;
    signOut({ redirect: false, callbackUrl });
    router.refresh();
  }

  const closeNavbar = () => setExpanded(false);
  return (
    <Navbar
      expand="lg"
      className="bg-body-teritary bg-light sticky-top"
      expanded={expanded}
    >
      <Container>
        <Link href="/" onClick={closeNavbar}>
          <Image
            src="/logo.png"
            className="m-0 p-2"
            width={150}
            height={85}
            alt="logo"
          />
        </Link>
        <Navbar.Toggle
          className="me-3 text-light"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-secondary">
            <Link className="navButton mx-2 my-2" href="/">
              Home
            </Link>
            <Link
              className="navButton mx-2 my-2"
              onClick={closeNavbar}
              href="/about"
            >
              About
            </Link>
            <Link
              className="navButton mx-2 my-2"
              onClick={closeNavbar}
              href="/admission"
            >
              Admission
            </Link>
            <Link
              className="navButton mx-2 my-2"
              onClick={closeNavbar}
              href="/coaching"
            >
              Coaching
            </Link>
            <Link
              className="navButton mx-2 my-2"
              onClick={closeNavbar}
              href="/exam"
            >
              Exam
            </Link>
            <Link
              className="navButton mx-2 my-2"
              onClick={closeNavbar}
              href="/career"
            >
              Career
            </Link>
            <Link
              className="navButton mx-2 my-2"
              onClick={closeNavbar}
              href="/blog"
            >
              Blog
            </Link>
            
            <Link
              className="navButton mx-2 my-2"
              onClick={closeNavbar}
              href="/contact"
            >
              Contact
            </Link>
            { email ? 
          <div className='navButton1'>
         <Button variant="contained" color="primary" endIcon={<LogoutIcon/>} onClick={handleLogout}>{name}</Button>
        </div>
        :<div className='navButton1'>
          <Button variant='contained' color="primary" onClick={()=>router.push('/employer')} endIcon={<MdSend/>}>post job</Button>
        </div>
        }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarData;
