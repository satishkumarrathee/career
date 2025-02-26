"use client";
import { Container, Row, Col,Image } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";
import DistrictState from "@/app/utils/state.json";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "@/app/libs/firebase";
import { useRouter } from "next/navigation";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useEffect } from "react";
import { InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { MdSend } from "react-icons/md";
import Skills from "../Skills";

interface FormProps {
  profile: string | undefined;
  category: string | undefined;
  description: string | undefined;
  nameData: string | undefined;
  skills: any;
}

const CareerForm: React.FC<FormProps> = ({ profile,description,skills,nameData, category }) => {
  const router = useRouter();
  const [img, setImg] = useState<File | null>(null);
  const [imgPerc, setImgPerc] = useState(0);
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [states, setStates] = useState("");
  const [districts, setDistricts] = useState("");
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [qualification, setQualification] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
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

  const handleStates = (event: any) => {
    setStates(event.target.value);
  };
  const handleDistricts = (event: any) => {
    setDistricts(event.target.value);
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateMobile = (number: string): boolean => {
    // Simple mobile number validation
    const regex = /^\d{10}$/;
    return regex.test(number);
  };
  const handleQualification = (event: SelectChangeEvent) => {
    setQualification(event.target.value as string);
  };
  const handleGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  const handleExperience = (event: SelectChangeEvent) => {
    setExperience(event.target.value as string);
  };

  //Firebase Image Data Start
  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);

  const uploadFile = (file: File, fileType: string) => {
    const storage = getStorage(app);
    const folder = fileType === "pdf" ? "resumePDFs/" : "otherFiles/";
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        fileType === "imgUrl" ? setImgPerc(Math.round(progress)) : null;
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log(error);
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return {
              ...prev,
              [fileType]: downloadURL,
            };
          });
        });
      }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let response = await fetch("/api/career", {
      method: "POST",
      body: JSON.stringify({
        name,
        qualification,
        email,
        contact,
        states,
        districts,
        gender,
        profile,
        category,
        experience,
        ...inputs,
      }),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      toast.success("Form Submitted");
      router.push("/");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <div>
              
              <div className="d-flex justify-content-center m-2">
                <Image src={`/services/${nameData}.png`} width={200} height={200} alt={nameData} fluid />
              </div>
              <div>
                <p className="fs-3 fw-bold my-3 text-center">{nameData}</p>
              </div>
              <div>
                <p style={{textAlign:'justify'}}>{description}</p>
              </div>
              <div>
                <Skills skills={skills}  />
              </div>
             
            </div>
          </Col>
          <Col md={6}>
            <form
              onSubmit={handleSubmit}
              className="bg-body rounded shadow m-1 p-4 position-relative"
            >
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                <TextField
                  fullWidth
                  value={contact}
                  onChange={handleContact}
                  label="Contact"
                  helperText={!isValid && contact !== "" && ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"> +91 </InputAdornment>
                    ),
                  }}
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
                  onChange={handleEmail}
                  label="Email"
                  // error={!isValid && email !== ""}
                  helperText={!isValid && email !== "" && ""}
                  multiline
                  variant="outlined"
                  className="m-1"
                  type="email"
                  autoComplete="off"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                />

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    required
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
              <div className="d-flex justify-content-center align-items-center">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Qualification
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={qualification}
                    label="Qualification"
                    required
                    onChange={handleQualification}
                  >
                    <MenuItem value={"10th"}>10Th</MenuItem>
                    <MenuItem value={"12th"}>12Th</MenuItem>
                    <MenuItem value={"Diploma"}>Diploma</MenuItem>
                    <MenuItem value={"Graduation"}>Graduation</MenuItem>
                    <MenuItem value={"Post Graduation"}>
                      Post Graduation
                    </MenuItem>
                    <MenuItem value={"PhD"}>Ph.D</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  value={profile}
                  label="Profile"
                  title={profile}
                  multiline
                  variant="outlined"
                  className="m-1 my-3"
                  type="text"
                  autoComplete="off"
                  required
                  disabled
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ManageAccountsIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
             
              <div className="d-flex justify-content-center align-items-center mb-3">
              <TextField
                  fullWidth
                  value={category}
                  label="Category"
                  title={category}
                  multiline
                  variant="outlined"
                  className="m-1"
                  type="text"
                  autoComplete="off"
                  required
                  disabled
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ManageAccountsIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControl fullWidth className="ms-1">
                  <InputLabel id="demo-simple-select-label">
                    Experience
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={experience}
                    label="Experience"
                    required
                    onChange={handleExperience}
                  >
                    <MenuItem value={"Fresher"}>Fresher</MenuItem>
                    <MenuItem value={"1 Year"}>1 Year</MenuItem>
                    <MenuItem value={"2 Years"}>2 Years</MenuItem>
                    <MenuItem value={"3 Years"}>3 Years</MenuItem>
                    <MenuItem value={"4 Years"}>4 Years</MenuItem>
                    <MenuItem value={"5 Years"}>5 Years</MenuItem>
                    <MenuItem value={"6-10 Years"}>6-10 Years</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <FormControl fullWidth className="me-1">
                  <InputLabel id="demo-simple-select-label">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={states}
                    label="State"
                    required
                    onChange={handleStates}
                  >
                    {DistrictState.map((item: any) => (
                      <MenuItem value={item.state} key={item.state}>
                        {item.state}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth className="ms-1">
                  <InputLabel id="demo-simple-select-label">
                    District
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={districts}
                    label="District"
                    required
                    disabled={!states}
                    onChange={handleDistricts}
                  >
                    {DistrictState.filter((item) => item.state === states).map(
                      (item) => (
                        item.districts.map((data) => (
                          <MenuItem value={data} key={data}>
                            {data}
                          </MenuItem>))
                      )
                    )}
                  </Select>
                </FormControl>
              </div>
              <div className="my-3">
                <label htmlFor="img">Resume Upload Pdf Only : </label>{" "}
                {imgPerc > 0 && "Uploading: " + imgPerc + "%"}
                <input
                  type="file"
                  accept="application/pdf"
                  id="pdfFile"
                  required
                  onChange={(e: any) => setImg(e.target.files?.[0])}
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  type="submit"
                  variant="contained"
                  color="warning"
                  className="mt-4"
                  endIcon={<MdSend />}
                  disabled={!isValid || !isValidContact}
                >
                  send
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CareerForm;
