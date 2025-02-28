"use client";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Col, Row } from "react-bootstrap";
import AdminHeading from "@/app/components/AdminHeading";
import SchoolIcon from "@mui/icons-material/School";
import Job from "@/app/utils/job.json";
import DistrictState from "@/app/utils/state.json";
import {
  FormControl,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";

const ManageEmployer = () => {
  const router = useRouter();
  const [name, setName] = useState();
  const [designation, setDesignation] = useState("");
  const [role, setRole] = useState("");
  const [typeJob, setTypeJob] = useState("");
  const [location, setLocation] = useState("");
  const [payType, setPayType] = useState("");
  const [flexible, setFlexible] = useState<boolean>(false);
  const [weeklyPayout, setWeeklyPayout] = useState<boolean>(false);
  const [overtimePay, setOvertimePay] = useState<boolean>(false);
  const [joiningBonus, setJoiningBonus] = useState<boolean>(false);
  const [annualBonus, setAnnualBonus] = useState<boolean>(false);
  const [PF, setPF] = useState<boolean>(false);
  const [travelAllowance, setTravelAllowance] = useState<boolean>(false);
  const [petrolAllowance, setPetrolAllowance] = useState<boolean>(false);
  const [mobileAllowance, setMobileAllowance] = useState<boolean>(false);
  const [internetAllowance, setInternetAllowance] = useState<boolean>(false);
  const [laptop, setLaptop] = useState<boolean>(false);
  const [healthAllowance, setHealthAllowance] = useState<boolean>(false);
  const [deposit, setDeposit] = useState<boolean>(false);
  const [state, setState] = useState();
  const [district, setDistrict] = useState();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let response = await fetch("/api/employer", {
      method: "POST",
      body: JSON.stringify({
        name,designation,weeklyPayout,role,district,state,overtimePay,location,flexible,payType, deposit,typeJob,mobileAllowance,travelAllowance,PF,laptop,healthAllowance,joiningBonus,annualBonus,petrolAllowance,internetAllowance 
      }),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      router.push("/");
      toast.success("Job Posted");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <Container>
      <Row className="bg-body p-3 my-3 rounded border">
        <Col md={12}>
          <div>
            <AdminHeading title="Post a new job" center />
          </div>
        </Col>
        <hr />
        <Col md={4} className="mt-5">
          <TextField
            fullWidth
            required
            type="text"
            id="name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            label="Organization Name"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SchoolIcon />{" "}
                </InputAdornment>
              ),
            }}
          />
        </Col>
        <Col md={4} className="mt-5">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Role"
              onChange={(e: any) => setRole(e.target.value)}
              required
            >
              {Job.map((item) => (
                <MenuItem value={item.name}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Col>
        <Col md={4} className="mt-5">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Designation</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={designation}
              label="Designation"
              onChange={(e: any) => setDesignation(e.target.value)}
              required
            >
              <MenuItem value={"Sr.Manager"}>Sr. Manager</MenuItem>
              <MenuItem value={"Manager"}>Manager</MenuItem>
              <MenuItem value={"Executive"}>Executive</MenuItem>
              <MenuItem value={"Coordinator"}>Coordinator</MenuItem>
            </Select>
          </FormControl>
        </Col>
        <Col md={4} className="mt-5">
          <FormControl fullWidth>
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
        </Col>
        <Col md={4} className="mt-5">
          <FormControl fullWidth>
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
        </Col>
        <Col md={4} className="mt-5">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeJob}
              label="Job Type"
              onChange={(e: any) => setTypeJob(e.target.value)}
              required
            >
              <MenuItem value={"Full Time"}>Full Time</MenuItem>
              <MenuItem value={"Part Time"}>Part Time</MenuItem>
              <MenuItem value={"Both (Part & Full Time)"}>
                Both (Part & Full Time)
              </MenuItem>
              <MenuItem value={"Night Shift"}>Night Shift</MenuItem>
            </Select>
          </FormControl>
        </Col>
        <Col md={4} className="mt-5">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Location Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Location Type"
              onChange={(e: any) => setLocation(e.target.value)}
              required
            >
              <MenuItem value={"Work From Office"}>Work From Office</MenuItem>
              <MenuItem value={"Work From Home"}>Work From Home</MenuItem>
              <MenuItem value={"Field Job"}>Field Job</MenuItem>
            </Select>
          </FormControl>
        </Col>
        <Col md={4} className="mt-5">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Pay Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={payType}
              label="Pay Type"
              onChange={(e: any) => setPayType(e.target.value)}
              required
            >
              <MenuItem value={"Fixed Only"}>Fixed Only</MenuItem>
              <MenuItem value={"Incentive Only"}>Incentive Only</MenuItem>
              <MenuItem value={"Fixed + Incentive"}>Fixed + Incentive</MenuItem>
            </Select>
          </FormControl>
        </Col>
        <Col md={12} className="mt-5">
          <div>
            <p>
              Do you offer any additional perks ?{" "}
              <span className="text-danger">*</span>
            </p>
            <div>
              <FormControlLabel
                control={<Checkbox />}
                label="Flexible Working Hours"
                checked={flexible}
                onChange={(e: any) => setFlexible(e.target.checked)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Weekly Payout"
                checked={weeklyPayout}
                onChange={(e: any) => setWeeklyPayout(e.target.checked)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Overtime Pay"
                checked={overtimePay}
                onChange={(e: any) => setOvertimePay(e.target.checked)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Joining Bonus"
                checked={joiningBonus}
                onChange={(e: any) => setJoiningBonus(e.target.checked)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Annual Bonus"
                checked={annualBonus}
                onChange={(e: any) => setAnnualBonus(e.target.checked)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="PF"
                checked={PF}
                onChange={(e: any) => setPF(e.target.checked)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Travel Allowance (TA)"
                checked={travelAllowance}
                onChange={(e: any) => setTravelAllowance(e.target.checked)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Petrol Allowance"
                checked={petrolAllowance}
                onChange={(e: any) => setPetrolAllowance(e.target.checked)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Mobile Allowance"
                checked={mobileAllowance}
                onChange={(e: any) => setMobileAllowance(e.target.checked)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Internet Allowance"
                checked={internetAllowance}
                onChange={(e: any) => setInternetAllowance(e.target.checked)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Laptop"
                checked={laptop}
                onChange={(e: any) => setLaptop(e.target.checked)}
                name="Laptop"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Health Allowance"
                checked={healthAllowance}
                onChange={(e: any) => setHealthAllowance(e.target.checked)}
              />
            </div>
          </div>
        </Col>
        <Col md={12} className="mt-5">
          <div>
            <p>
              Is there any joining fee or deposit required from the candidate?{" "}
              <span className="text-danger">*</span>{" "}
              <span>
                {" "}
                <FormControlLabel
                  control={<Checkbox />}
                  label=""
                  checked={deposit}
                  onChange={(e: any) => setDeposit(e.target.checked)}
                />
              </span>
            </p>
          </div>
        </Col>

        <div className="d-flex align-items-center justify-content-center my-3">
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default ManageEmployer;
