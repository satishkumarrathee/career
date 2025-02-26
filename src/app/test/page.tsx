import Link from "next/link";
import { Col, Container, Image, Row } from "react-bootstrap";
import '@/app/style/form.css'
import Chatbot from "../components/Chatbot";

const Test = () => {
    return (
        <div>
            <div className="mt-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dignissimos!</p>
            </div>
<div className="my-5">
    <Chatbot />
        </div>
        </div>
        
    
        // <>
        //     <header className="home-header">
        //         <div className="navbar navbar-expand-lg navbar-light">
        //             <div className="container">
        //                 <Link href="/"><Image src="/universityForm/images/logo.png" fluid /></Link>
        //             </div>
        //         </div>
        //     </header>

        //     <div className="hero-sec">
        //         <div className="hero-sec-inner container">
        //             <div className="hero-right">
        //                 <h2>Know More</h2>
        //                 <div className="form-inner">
        //                     <div className="row">
        //                         <div className="col-12">
        //                             <input type="text" className="form-control" placeholder="Name*" />
        //                         </div>
        //                         <div className="col-12">
        //                             <input type="email" className="form-control" placeholder="Email*" />
        //                         </div>

        //                         <div className="col-12">
        //                             <input type="tel" className="form-control" placeholder="Mobile Number*" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
        //                         </div>
        //                         <div className="col-12 set-inline">
        //                             <input type="text" className="form-control" placeholder="OTP" disabled />
        //                             <span><input type="button" className="blue-btn" value="Verify" /></span><span><input type="button" className="blue-btn" value="Resend" /></span>
        //                         </div>
        //                     </div>
        //                     <div className="col-12">
        //                         <input type="text" className="form-control" placeholder="State*" />
        //                     </div>
        //                     <div className="col-12">
        //                         <input type="text" className="form-control" placeholder="City*" />
        //                     </div>

        //                     <div className="col-12">
        //                         <select className="form-select set-select" aria-label="Default select example">
        //                             <option>Program Level</option>
        //                             <option value="1">One</option>
        //                             <option value="2">Two</option>
        //                             <option value="3">Three</option>
        //                         </select>
        //                     </div>
        //                     <div className="col-12">
        //                         <input type="text" className="form-control" placeholder="Online Courses or Programmes*" disabled />
        //                     </div>

        //                     <div className="col-12">
        //                         <div className="form-check">
        //                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        //                                 <label className="form-check-label">
        //                                     I authorise Amity University Online and its associates to contact me with updates & notifications via Email, SMS, WhatsApp, and Voice call as per the Privacy Policy. This consent will override any registration for DNC / NDNC.
        //                                 </label>
        //                         </div>

        //                     </div>
        //                     <div className="col-12">
        //                         <div className="button-ctr">
        //                             <a href="#" className="button-dark btn">Submit</a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="hero-sec-mob">
        //         <div className="hero-sec-mob-inner container">
        //             <div className="row">
        //                 <div className="col-12">
        //                     <div className="mob-banner">
        //                         <Image src="/universityForm/images/banner_mob.jpg" alt="" fluid />
        //                     </div>
        //                 </div>
        //                 <div className="col-12">
        //                     <div className="hero-sec-inner">
        //                         <div className="hero-right">
        //                             <h2>Know More</h2>
        //                             <div className="form-inner">

        //                                 <div className="row">
        //                                     <div className="col-12">
        //                                         <input type="text" className="form-control" placeholder="Name*" />
        //                                     </div>
        //                                     <div className="col-12">
        //                                         <input type="email" className="form-control" placeholder="Email*" />
        //                                     </div>

        //                                     <div className="col-12">
        //                                         <input type="tel" className="form-control" placeholder="Mobile Number*" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
        //                                     </div>
        //                                     <div className="col-12 set-inline">
        //                                         <input type="text" className="form-control" placeholder="OTP" disabled />
        //                                         <span><input type="button" className="blue-btn" value="Verify" /></span><span><input type="button" className="blue-btn" value="Resend" /></span>
        //                                     </div>
        //                                 </div>
        //                                 <div className="col-12">
        //                                     <input type="text" className="form-control" placeholder="State*" />
        //                                 </div>
        //                                 <div className="col-12">
        //                                     <input type="text" className="form-control" placeholder="City*" />
        //                                 </div>

        //                                 <div className="col-12">
        //                                     <select className="form-select set-select" aria-label="Default select example">
        //                                         <option >Program Level</option>
        //                                         <option value="1">One</option>
        //                                         <option value="2">Two</option>
        //                                         <option value="3">Three</option>
        //                                     </select>
        //                                 </div>
        //                                 <div className="col-12">
        //                                     <input type="text" className="form-control" placeholder="Online Courses or Programmes*" disabled />
        //                                 </div>

        //                                 <div className="col-12">
        //                                     <div className="form-check">
        //                                         <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        //                                         <label className="form-check-label" >
        //                                             I authorise Amity University Online and its associates to contact me with updates & notifications via Email, SMS, WhatsApp, and Voice call as per the Privacy Policy. This consent will override any registration for DNC / NDNC.
        //                                         </label>
        //                                     </div>

        //                                 </div>
        //                                 <div className="col-12">
        //                                     <div className="button-ctr">
        //                                         <a href="#" className="button-dark btn">Submit</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     </>

    );
}

export default Test;