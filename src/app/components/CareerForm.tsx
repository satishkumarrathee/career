"use client";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "@/app/libs/firebase";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import DistrictState from "@/app/utils/state.json";
import { FormControl, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material';

interface CareerFormProps {
  profile: string | undefined;
  categoryData: any;
}

const CareerForm: React.FC<CareerFormProps> = ({ profile, categoryData }) => {
  const router = useRouter();
  const [img, setImg] = useState<File | null>(null);
  const [imgPerc, setImgPerc] = useState(0);
  const [gender, setGender] = useState("");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [qualification, setQualification] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [state, setState] = useState();
  const [district, setDistrict] = useState();


  //Firebase Image Data Start
  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);

  const uploadFile = (file: File, fileType: string) => {
    const storage = getStorage(app);
    const folder = fileType === "imgUrl" ? "resumeImages/" : "resumeVideos/";
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
        state,
        district,
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
      toast.success("Career Form Submitted");
      router.push("/");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
      <Container>
        <Row>
          <Col md={12}>
            <form
              onSubmit={handleSubmit}
              className="bg-light rounded shadow mx-1 my-3 p-4"
            >
              <div className="text-center">
                <p className="fs-2 text-primary">Compare & Select from 100+ </p>
                <p className="fs-4 text-secondary">
                  Find Best Job on {profile}
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
                  className="mx-1 my-3"
                  type="text"
                  autoComplete="off"
                  required
                />
                <TextField
                  fullWidth
                  value={contact}
                  onChange={(e: any) => setContact(e.target.value)}
                  label="Contact"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"> +91 </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  className="mx-1 my-3"
                  type="tel"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="d-flex justify-content-between">
                <TextField
                  fullWidth
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  label="Email"
                  multiline
                  variant="outlined"
                  className="mx-1 my-3"
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
                    className="mx-1 my-3"
                    label="Gender"
                    onChange={(e:any)=>setGender(e.target.value)}
                  >
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="d-flex justify-content-between">
              <FormControl fullWidth >
                  <InputLabel id="demo-simple-select-label" >State</InputLabel>
                  <Select
                  
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    className="mx-1 my-3"
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
                    className="mx-1 my-3"
                    required
                    disabled={!state}
                    onChange={(e: any) => setDistrict(e.target.value)}
                  >
           {DistrictState.filter((item) => item.state === state).map(
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
              <div className="d-flex justify-content-between">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Qualification
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    className="mx-1 my-3"
                    value={qualification}
                    label="Qualification"
                    onChange={(e:any)=>setQualification(e.target.value)}
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
                  className="mx-1 my-3"
                  type="text"
                  autoComplete="off"
                  required
                  disabled
                />
              </div>
              <div className="d-flex justify-content-between">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    className="mx-1 my-3"
                    onChange={(e:any)=>setCategory(e.target.value)}
                  >
                    {categoryData.map((item:any) => (
                      <MenuItem value={item.name} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Experience
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={experience}
                    label="Experience"
                    className="mx-1 my-3"
                    onChange={(e:any)=>setExperience(e.target.value)}
                  >
                    <MenuItem value={'Fresher'}>Fresher</MenuItem>
                    <MenuItem value={'1 Year'}>1 Year</MenuItem>
                    <MenuItem value={'2 Years'}>2 Years</MenuItem>
                    <MenuItem value={'3 Years'}>3 Years</MenuItem>
                    <MenuItem value={'4 Years'}>4 Years</MenuItem>
                    <MenuItem value={'5 Years'}>5 Years</MenuItem>
                    <MenuItem value={'6 Years'}>6 Years</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <label htmlFor="img">Resume Upload : </label>{" "}
                {imgPerc > 0 && "Uploading: " + imgPerc + "%"}
                <input
                  type="file"
                  accept="image/*"
                  id="img"
                  required
                  onChange={(e: any) => setImg(e.target.files?.[0])}
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="mt-4"
                >
                  Find Best Job
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
  );
};

export default CareerForm;
