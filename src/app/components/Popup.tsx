"use client";
import { Button, InputAdornment } from "@mui/material";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import TextField from "@mui/material/TextField";
import Modal from "react-bootstrap/Modal";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { MdSend } from "react-icons/md";
import { useState } from "react";

const Popup = (props: any) => {
  const router = useRouter();
  const [show, setShow ]= useState(true);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isValidContact, setIsValidContact] = useState(false);

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
    setIsValid(validateEmail(event.target.value));
  };

  const handleContact = (event: any) => {
    const input = event.target.value;
    setContact(input);
    setIsValidContact(validateMobile(input));
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateMobile = (number: string): boolean => {
    const regex = /^\d{10}$/;
    return regex.test(number);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let response = await fetch("/api/popup", {
      method: "POST",
      body: JSON.stringify({name,contact,email}),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      router.refresh();
      setShow(false);
      toast.success("Thank You");
    } else {
      toast.error("Something went wrong");
    }
  };

  // END

  return (
    <Modal
      {...props}
      show={show}
      onHide={() => setShow(false)}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div>
            <div className="text-primary">Golden Opportunity</div>
            <div className="fs-6 ">Register Now</div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit}
          className="d-flex align-items-center p-1 justify-content-center flex-column"
        >
          <TextField
            fullWidth
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            label="Name"
            multiline
            variant="outlined"
            className="m-1"
            type="text"
            autoComplete="off"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <br />
          <TextField
            fullWidth
            value={contact}
            onChange={handleContact}
            label="Contact"
            helperText={!isValid && contact !== "" && ""}
            multiline
            variant="outlined"
            className="m-1"
            type="tel"
            autoComplete="off"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"> +91 </InputAdornment>
              ),
            }}
          />
          <br />
          <TextField
            fullWidth
            value={email}
            onChange={handleEmail}
            label="Email"
            // error={!isValid && email !== ""}
            helperText={!isValid && email !== "" && ""}
            multiline
            variant="outlined"
            className="m-1"
            type="email"
            autoComplete="off"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <br />
          <div className="d-flex justify-content-center my-2 align-items-center">
            <Button type="submit" variant="contained" color="primary" disabled={!isValid || !isValidContact} endIcon={<MdSend/>}>
              Submit
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
export default Popup;


