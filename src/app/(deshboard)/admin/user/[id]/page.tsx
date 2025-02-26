'use client'
import { useParams, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    InputAdornment,
    IconButton,
    OutlinedInput,
  } from "@mui/material";
import axios from 'axios';
  import Visibility from "@mui/icons-material/Visibility";
  import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState,useEffect } from 'react';


const UserAdmin = () => {
    const router = useRouter();
    // const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState();
    // const [password, setPassword] = useState("");

    // const handleClickShowPassword = () => setShowPassword((show) => !show);
    // const handleMouseDownPassword = (
    //   event: React.MouseEvent<HTMLButtonElement>
    // ) => {
    //   event.preventDefault();
    // };

    // const handlePasswordChange = (event: any) => {
    //     setPassword(event.target.value);
    //   };

      const params = useParams();
      useEffect(() => {
          const pullData = async () => {
              let singleData = await axios.get(`/api/user/${params.id}`).then((res) => (res.data.data)).
                  catch((err) => toast.error(err))
              setName(singleData.name)
              setEmail(singleData.email)
              setRole(singleData.role)
              // setPassword(singleData.password)
          }
  
          pullData();
      }, [])
      // Data

      const handleSubmit = async () => {
        const pushData = await fetch(`/api/user/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({name,email,role}),
            headers: { "Content-Type": "application/json" }
        })
        await pushData.json();
        router.push('/admin/user');
        toast.success("Role Update")
    }
    
    // END
    return (
        <div className='d-flex justify-content-center my-5 align-items-center'>
            <div className='border rounded shadow p-5'>
                <TextField label="Name" fullWidth variant="outlined" disabled className='my-3' type="text" name='name' value={name} autoComplete='off' onChange={(e:any)=>setName(e.target.value)} required/><br />
                <TextField label="Email" fullWidth variant="outlined" disabled className='my-3' type="email" name='email' value={email} autoComplete='off' onChange={(e:any)=>setEmail(e.target.value)} required/><br />
                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={role}
                                        label="Role"
                                        className="m-1"
                                        onChange={(e:any)=>setRole(e.target.value)}
                                    >
                                        <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                                        <MenuItem value={"SUBADMIN"}>SUBADMIN</MenuItem>
                                        <MenuItem value={"USER"}>USER</MenuItem>
                                    </Select>
                                </FormControl><br />
                {/* <FormControl className="my-3" required variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
           Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={password}
            onChange={handlePasswordChange}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="New Password"
            required
          />
          </FormControl> */}
                <div className='d-flex justify-content-center my-2 align-items-center'>
                <Button onClick={handleSubmit} variant='contained' color='primary'>Submit</Button>
                </div>
            </div>
        </div>
    )

}
export default UserAdmin;