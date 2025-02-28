"use client";
import { Container, Col, Row, Image, Card } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { MdSend } from "react-icons/md";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import DistrictState from "@/app/utils/state.json";
import UniversityData from "@/app/utils/university.json";
import TypeData from "@/app/utils/typeCourse.json";
import UniversityCourse from "@/app/utils/universityCourseList.json";

const UniversityForm = () => {
  const router = useRouter();
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  const [descipline, setDescipline] = useState();
  const [program, setProgram] = useState();
  const [type, setType] = useState();
  const [university, setUniversity] = useState();
  const [qualification, setQualification] = useState();
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
    let response = await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({
        name,
        contact,
        state,
        email,
        district,
        descipline,
        qualification,
        university,
        type,
        program,
      }),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      router.push('/');
      toast.success("Form Submitted");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={12}>
          <form
            className="bg-blody shadow m-1 p-4"
            id="myForm"
            onSubmit={handleSubmit}
          >
            <div className="d-flex justify-content-between">
              {" "}
              <TextField
                fullWidth
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                label="Full Name"
                multiline
                variant="outlined"
                className="m-1 my-3"
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
              <TextField
                fullWidth
                value={contact}
                onChange={handleContact}
                label="Contact"
                helperText={!isValid && contact !== "" && ""}
                multiline
                variant="outlined"
                className="m-1 my-3"
                type="tel"
                autoComplete="off"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"> +91 </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="d-flex justify-content-between">
              {" "}
              <TextField
                fullWidth
                value={email}
                onChange={handleEmail}
                label="Email"
                // error={!isValid && email !== ""}
                helperText={!isValid && email !== "" && ""}
                
                variant="outlined"
                className="m-1 my-3"
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
              <FormControl fullWidth className="m-1 my-3">
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={state}
                  label="State"
                  required
                  onChange={(e: any) => setState(e.target.value)}
                >
                  {DistrictState.map((item: any) => (
                    <MenuItem value={item.state} key={item.state}>
                      {item.state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="d-flex justify-content-between">
              <FormControl fullWidth className="m-1 my-3">
                <InputLabel id="demo-simple-select-label">District</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={district}
                  label="District"
                  required
                  disabled={!state}
                  onChange={(e: any) => setDistrict(e.target.value)}
                >
                  {DistrictState.filter((item) => item.state === state).map(
                    (item) =>
                      item.districts.map((data) => (
                        <MenuItem value={data} key={data}>
                          {data}
                        </MenuItem>
                      ))
                  )}
                </Select>
              </FormControl>
              <FormControl fullWidth className="m-1 my-3">
                <InputLabel id="demo-simple-select-label">
                  Qualification
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={qualification}
                  label="Qualification"
                  required
                  onChange={(e: any) => setQualification(e.target.value)}
                >
                  {UniversityCourse.map((item: any) => (
                    <MenuItem value={item.name} key={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="d-flex justify-content-between">
              <FormControl fullWidth className="m-1 my-3">
                <InputLabel id="demo-simple-select-label">
                  Descipline Interested
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={descipline}
                  label="Descipline"
                  required
                  disabled={!qualification}
                  onChange={(e: any) => setDescipline(e.target.value)}
                >
                  {UniversityCourse.filter(
                    (item) => item.name === qualification
                  ).map((item) =>
                    item.category.map((data: any) => (
                      <MenuItem value={data.name} key={data.name}>
                        {data.name}
                      </MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
              <FormControl fullWidth className="m-1 my-3">
                <InputLabel id="demo-simple-select-label">
                  Select Program
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={program}
                  label="Program"
                  disabled={!descipline}
                  required
                  onChange={(e: any) => setProgram(e.target.value)}
                >
                  {UniversityCourse.filter(
                    (item: any) =>
                      item.name === qualification &&
                      item.category.some(
                        (category: any) => category.name === descipline
                      )
                  )
                    .flatMap((item: any) =>
                      item.category
                        .filter((category: any) => category.name === descipline)
                        .flatMap((category: any) => category.category)
                    )
                    .map((data: any) => (
                      <MenuItem value={data} key={data}>
                        {data}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
            <div className="d-flex justify-content-between">
              <FormControl fullWidth className="m-1 my-3">
                <InputLabel id="demo-simple-select-label">
                  University
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={university}
                  label="University"
                  required
                  onChange={(e:any) => setUniversity(e.target.value)}
                >
                  {UniversityData.map((data) => (
                      <MenuItem value={data.name} key={data.name}>
                        {data.name}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
              <FormControl fullWidth className="m-1 my-3">
                <InputLabel id="demo-simple-select-label">
                 Course Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Course Type"
                  required
                  onChange={(e: any) => setType(e.target.value)}
                >
                  {TypeData.map((item) => (
                      <MenuItem value={item.name} key={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isValid || !isValidContact}
                endIcon={<MdSend />}
              >
                Submit
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
export default UniversityForm;
