"use client";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import { Button } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { MdWork } from "react-icons/md";
import { FiMenu, FiX, FiUser, FiSearch } from "react-icons/fi";
import SearchModal from "./SearchModal";

interface NavbarProps {
  email: string | null | undefined;
  name: string | null | undefined;
}

const NavbarData: React.FC<NavbarProps> = ({ email, name }) => {
  const [expanded, setExpanded] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    const callbackUrl = `${window.location.origin}/login`;
    signOut({ redirect: false, callbackUrl });
    router.refresh();
  };

  const closeNavbar = () => setExpanded(false);

  return (
    <>
      <div className="fixed-top bg-white shadow-sm border-bottom border-blue-100">
        <Navbar
          expand="lg"
          expanded={expanded}
          // className="py-2"
          style={{ background: "linear-gradient(to right, #f8faff, #eef3ff)" }}
        >
          <Container>
            {/* ==== Logo ==== */}
            <Link
              href="/"
              className="d-flex align-items-center text-decoration-none"
              onClick={closeNavbar}
            >
              <Image
                src="/logo.png"
                alt="CareerDefiner Logo"
                width={150}
                height={60}
                className="img-fluid"
              />
            </Link>

            {/* ==== Mobile Toggle ==== */}
            <Navbar.Toggle
              aria-controls="navbar"
              className="border-0 bg-transparent text-primary"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <FiX size={24} /> : <FiMenu size={24} />}
            </Navbar.Toggle>

            {/* ==== Collapsible Menu ==== */}
            <Navbar.Collapse id="navbar" className="justify-content-end mt-3 mt-lg-0">
              <Nav className="align-items-center">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Admission", href: "/admission" },
                  { name: "Coaching", href: "/coaching" },
                  { name: "Exam", href: "/exam" },
                  { name: "Career", href: "/career" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeNavbar}
                    className="nav-link-custom text-decoration-none text-primary fw-semibold mx-2"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* ==== Auth or Post Job ==== */}
                {email ? (
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<FiUser />}
                    onClick={handleLogout}
                    className="fw-semibold rounded-pill text-white shadow-sm normal-case ms-2"
                    style={{
                      background: "linear-gradient(to right, #4e79ec, #678ef8)",
                    }}
                  >
                    {name}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    startIcon={<MdWork />}
                    onClick={() => {
                      router.push("/employer");
                      closeNavbar();
                    }}
                    className="fw-semibold rounded-pill text-white shadow-sm normal-case ms-2"
                    style={{
                      background: "linear-gradient(to right, #2ecc71, #27ae60)",
                    }}
                  >
                    Post Job
                  </Button>
                )}

                {/* ==== Search Button ==== */}
                <button
                  type="button"
                  className="btn btn-outline-primary d-flex align-items-center gap-2 px-3 py-2 rounded-pill shadow-sm border-2 border-primary ms-2"
                  onClick={() => setShowSearchModal(true)}
                >
                  <FiSearch size={18} />
                  <span className="fw-semibold d-none d-sm-inline">Search</span>
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Prevent content overlap */}
      <div style={{ height: "100px" }}></div>

      {/* Search Modal */}
      <SearchModal
        show={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        onSelect={(item) => console.log("Selected:", item)}
        initialQuery=""
      />

      <style jsx>{`
        /* Link Styling */
        .nav-link-custom {
          position: relative;
          font-size: 0.92rem;
          padding: 6px 8px;
          margin: 0 4px;
          transition: all 0.3s ease;
        }

        /* Elegant underline hover */
        .nav-link-custom::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #4e79ec;
          transition: width 0.3s ease;
        }

        .nav-link-custom:hover::after {
          width: 100%;
        }

        .nav-link-custom:hover {
          color: #4e79ec !important;
          transform: translateY(-1px);
        }

        @media (max-width: 992px) {
          .nav-link-custom {
            display: block;
            width: 100%;
            text-align: center;
            margin: 6px 0;
            font-size: 1rem;
            padding: 10px 0;
          }
        }
      `}</style>
    </>
  );
};

export default NavbarData;




















// "use client";
// import Link from "next/link";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Image from "react-bootstrap/Image";
// import { Container } from "react-bootstrap";
// import { Button } from "@mui/material";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signOut } from "next-auth/react";
// import { MdWork } from "react-icons/md";
// import { FiMenu, FiX, FiUser, FiSearch } from "react-icons/fi";
// import SearchModal from "./SearchModal";

// interface NavbarProps {
//   email: string | null | undefined;
//   name: string | null | undefined;
// }

// const NavbarData: React.FC<NavbarProps> = ({ email, name }) => {
//   const [expanded, setExpanded] = useState(false);
//   const [showSearchModal, setShowSearchModal] = useState(false);
//   const router = useRouter();

//   const handleLogout = () => {
//     const callbackUrl = `${window.location.origin}/login`;
//     signOut({ redirect: false, callbackUrl });
//     router.refresh();
//   };

//   const closeNavbar = () => setExpanded(false);

//   return (
//     <>
//       <div className="fixed-top bg-white shadow-sm border-bottom border-blue-100">
//         <Navbar
//           expand="lg"
//           expanded={expanded}
//           className="py-2"
//           style={{ background: "linear-gradient(to right, #f8faff, #eef3ff)" }}
//         >
//           <Container>
//             {/* ==== Logo ==== */}
//             <Link
//               href="/"
//               className="d-flex align-items-center text-decoration-none"
//               onClick={closeNavbar}
//             >
//               <Image
//                 src="/logo.png"
//                 alt="CareerDefiner Logo"
//                 width={150}
//                 height={60}
//                 className="img-fluid"
//               />
//             </Link>

//             {/* ==== Mobile Toggle ==== */}
//             <Navbar.Toggle
//               aria-controls="navbar"
//               className="border-0 bg-transparent text-primary"
//               onClick={() => setExpanded(!expanded)}
//             >
//               {expanded ? <FiX size={24} /> : <FiMenu size={24} />}
//             </Navbar.Toggle>

//             {/* ==== Collapsible Menu ==== */}
//             <Navbar.Collapse id="navbar" className="justify-content-end mt-3 mt-lg-0">
//               <Nav className="align-items-center gap-2 gap-lg-3">
//                 {[
//                   { name: "Home", href: "/" },
//                   { name: "About", href: "/about" },
//                   { name: "Admission", href: "/admission" },
//                   { name: "Coaching", href: "/coaching" },
//                   { name: "Exam", href: "/exam" },
//                   { name: "Career", href: "/career" },
//                   { name: "Blog", href: "/blog" },
//                   { name: "Contact", href: "/contact" },
//                 ].map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     onClick={closeNavbar}
//                     className="nav-link-custom text-decoration-none text-primary fw-semibold px-3 py-2 rounded-3"
//                   >
//                     {item.name}
//                   </Link>
//                 ))}

//                 {/* ==== Auth or Post Job ==== */}
//                 {email ? (
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     size="small"
//                     startIcon={<FiUser />}
//                     onClick={handleLogout}
//                     className="fw-semibold rounded-pill text-white shadow-sm normal-case"
//                     style={{
//                       background: "linear-gradient(to right, #4e79ec, #678ef8)",
//                     }}
//                   >
//                     {name}
//                   </Button>
//                 ) : (
//                   <Button
//                     variant="contained"
//                     color="success"
//                     size="small"
//                     startIcon={<MdWork />}
//                     onClick={() => {
//                       router.push("/employer");
//                       closeNavbar();
//                     }}
//                     className="fw-semibold rounded-pill text-white shadow-sm normal-case"
//                     style={{
//                       background: "linear-gradient(to right, #2ecc71, #27ae60)",
//                     }}
//                   >
//                     Post Job
//                   </Button>
//                 )}

//                 {/* ==== Search Button ==== */}
//                 <button
//                   type="button"
//                   className="btn btn-outline-primary d-flex align-items-center gap-2 px-3 py-2 rounded-pill shadow-sm border-2 border-primary"
//                   onClick={() => setShowSearchModal(true)}
//                 >
//                   <FiSearch size={18} />
//                   <span className="fw-semibold d-none d-sm-inline">Search</span>
//                 </button>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </div>

//       {/* Prevent content overlap */}
//       <div style={{ height: "80px" }}></div>

//       {/* Search Modal */}
//       <SearchModal
//         show={showSearchModal}
//         onClose={() => setShowSearchModal(false)}
//         onSelect={(item) => console.log("Selected:", item)}
//         initialQuery=""
//       />

//       <style jsx>{`
//         .nav-link-custom {
//           font-size: 0.95rem;
//           transition: all 0.25s ease-in-out;
//         }
//         .nav-link-custom:hover {
//           background-color: white;
//           color: #4e79ec !important;
//           box-shadow: 0 2px 8px rgba(78, 121, 236, 0.2);
//         }
//         @media (max-width: 992px) {
//           .nav-link-custom {
//             width: 100%;
//             text-align: center;
//             padding: 10px 0;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default NavbarData;

