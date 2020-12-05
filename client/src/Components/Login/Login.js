import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  makeStyles,
  FormControl,
  TextField,
  Button,
} from "@material-ui/core";
import axios from "axios";
import Swal from "sweetalert2";
import { openAlert } from "./../../utils/AlertModal";
import { checkCookie, getCookie, setCookie } from "../../utils/cookie";

const mate = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#489DEB",
    height: "100vh",
    width: "100%",
  },
  login: {},
  form: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form_wrapper: {
    backgroundColor: "white",
    height: "35%",
    width: "40%",
    borderRadius: 5,
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  container: {
    height: "100%",
  },
  group_btn: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: -15,
  },
  btn: {
    width: "25%",
  },
}));

function Login() {
  const classes = mate();

  const [infor, setinfor] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setinfor({
      ...infor,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (e) => {
    console.log(infor);
    const url = `http://localhost:1212/user/login`;
    const data = {
      ...infor,
    };
    const config = {};
    axios
      .post(url, data, config)
      .then((res) => {
        console.log(res.data);

        const messageTrigger = {
          title: res.data.msg,
          timer: 1500,
          icon: "success",
        };

        openAlert(messageTrigger);
        setCookie("accesstoken", res.data.accesstoken);
      })
      .catch((er) => {
        console.log(er.response);
        console.log(er);
        const messageTrigger = {
          title: er?.response?.data?.msg || "Network Error!",
          timer: 1500,
          icon: "error",
        };
        openAlert(messageTrigger);
      });
  };

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Box className={classes.form}>
          <Box className={classes.form_wrapper}>
            <FormControl className={classes.username} fullWidth={true}>
              <TextField
                label="Username"
                variant="outlined"
                value={infor.username}
                onChange={handleChange}
                name="username"
              />
            </FormControl>

            <FormControl className={classes.username} fullWidth={true}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={infor.password}
                onChange={handleChange}
                name="password"
              />
            </FormControl>
            <Box className={classes.group_btn}>
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={handleLogin}
              >
                Login
              </Button>

              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
              >
                Sign up
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
