"use client";
import { Button,InputAdornment } from "@mui/material";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';

const ForgetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);


  
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const handleEmail = (event:any) => {
    setEmail(event.target.value);
    setIsValid(validateEmail(event.target.value));
  };
  const handleSubmit = async () => { 
    try {
      const response = await fetch("/api/forget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Email Sent");
        router.push('/login')
      } else {
        null
      }
    } catch (error:any) {
      null
    }
  };

  // END

  return (
    <div className="d-flex justify-content-center my-4 align-items-center flex-column">
        <div className="border p-5">
      
        <TextField
          onChange={handleEmail}
          label="Email"
          helperText={
            !isValid && email !== "" && ""
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">< EmailIcon/></InputAdornment>
            ),
          }}
          variant="outlined"
          fullWidth
          className=""
          type="email"
          value={email}
          autoComplete="off"
          required
        /> <br />
      <div className="d-flex justify-content-center my-3 align-items-center">
        <Button onClick={handleSubmit} disabled={!isValid} variant="contained" color="primary">
          Submit
        </Button>
      </div>
      </div>
    </div>
  );
};
export default ForgetPassword;
