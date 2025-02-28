"use client";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import DistrictState from "@/app/utils/state.json";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

interface FormProps {
  specilization: any;
  selectedSpecilization: any;
  setSelectedSpecilization: any;
  course: string | undefined;
}

const Form: React.FC<FormProps> = ({ course, specilization,selectedSpecilization ,setSelectedSpecilization}) => {
  const router = useRouter();

  const [gender, setGender] = useState("");
  const [courseType, setCourseType] = useState("");
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  const [dateBirth, setDateOfBirth] = useState("2022-04-17");

  const dateOfBirth = new Date(dateBirth).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const handleGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  const handleCourseType = (event: SelectChangeEvent) => {
    setCourseType(event.target.value as string);
  };
  const handlesetSelectedSpecilization = (event: SelectChangeEvent) => {
    setSelectedSpecilization(event.target.value as string);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let response = await fetch("/api/admission", {
      method: "POST",
      body: JSON.stringify({
        gender,
        specilization :selectedSpecilization,
        courseType,
        name,
        contact,
        course,
        email,
        state,
        district,
        dateOfBirth,
      }),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      toast.success("Admission Data Submitted");
      router.push("/");
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <form
              className="bg-light rounded shadow m-1 p-4"
              onSubmit={handleSubmit}
            >
              <div className="text-center">
                <p className="fs-2 text-primary">Compare & Select from 100+ </p>
                <p className="fs-4 text-secondary">
                  Best University for your {course} Course{" "}
                </p>
              </div>

              <div className="d-flex justify-content-between">
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
                />
                <TextField
                  fullWidth
                  value={contact}
                  onChange={(e: any) => setContact(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"> +91 </InputAdornment>
                    ),
                  }}
                  label="Contact"
                  multiline
                  variant="outlined"
                  className="m-1 my-3"
                  type="tel"
                  autoComplete="off"
                  required
                />{" "}
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <TextField
                  fullWidth
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  label="Email"
                  multiline
                  variant="outlined"
                  className="m-1 my-3"
                  type="email"
                  autoComplete="off"
                  required
                />

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                    onChange={handleGender}
                  >
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="d-flex justify-content-between  my-3">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    className="m-1"
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
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    District
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={district}
                    label="District"
                    className="m-1"
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
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <TextField
                  fullWidth
                  name="course"
                  value={course}
                  className="m-1 my-3"
                  label="Course"
                  variant="outlined"
                  type="text"
                  autoComplete="off"
                  required
                  disabled
                />

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Specilization
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handlesetSelectedSpecilization}
                    label="Specilization"
                  >
                    {specilization.map((item: any) => (
                      <MenuItem value={item.name} key={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <FormControl fullWidth className="m-1 my-3">
                  <InputLabel id="demo-simple-select-label">
                    Course Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={courseType}
                    label="Course Type"
                    onChange={handleCourseType}
                  >
                    <MenuItem value={"Online"}>Online</MenuItem>
                    <MenuItem value={"Regular"}>Regular</MenuItem>
                    <MenuItem value={"Distance"}>Distance</MenuItem>
                    <MenuItem value={"Private"}>Private</MenuItem>
                    <MenuItem value={"Part Time"}>Part Time</MenuItem>
                    <MenuItem value={"Correspondence"}>Correspondence</MenuItem>
                  </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date of Birth"
                    name="startDate"
                    onChange={(value: any) => setDateOfBirth(value)}
                    className="m-1 my-3"
                  />
                </LocalizationProvider>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="mt-4"
                >
                  Find Best Unversity
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Form;
