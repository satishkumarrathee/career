"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  Button,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useEffect, useState } from "react";

const ResetPassword = ({ params }: any) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch("/api/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: params.id }),
        });

        if (response.ok) {
          const newData = await response.json();
          setUserData(newData);
        } else {
          console.log("user data not found");
        }
      } catch (error: any) {
        console.log(error, "Api Error");
      }
    };

    verifyToken();
  }, [params.id]);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const oldData = JSON.parse(userData);
    try {
      const response = await fetch("/api/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, email: oldData.email }),
      });

      if (response.ok) {
        toast.success("Password Change");
        router.push("/");
      } else {
        toast.error("something went wrong");
      }
    } catch (error: any) {
      toast.error("something went wrong");
    }
  };
  // END
  return (
    <div className="d-flex justify-content-center my-5 align-items-center">
      <div className="border rounded shadow p-5">
        <FormControl className="my-3" required variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Reset Password
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
        </FormControl>{" "}
        <div className="d-flex justify-content-center my-2 align-items-center">
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Reset password
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
