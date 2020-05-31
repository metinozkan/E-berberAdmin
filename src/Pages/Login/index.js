import React, { useState } from "react";
import { Agent, Storage, Loading } from "../../Utils/importFiles";
import { Redirect, useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import ConfirmModal from "../../Components/ConfirmModal";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({ signed, setSigned }) => {
  const classes = useStyles();
  const [eMail, seteMail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const history = useHistory();
  return signed ? (
    <Redirect to="/home"></Redirect>
  ) : (
    <Container component="main" maxWidth="xs">
      {isLoading && <Loading />}
      <ConfirmModal
        openConfirmModal={openConfirmModal}
        setOpenConfirmModal={setOpenConfirmModal}
        confirmMesage={"Tamam"}
        modalContent={modalContent}
      />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Giriş Yap
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            value={eMail}
            onChange={(e) => {
              seteMail(e.target.value);
            }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              setIsLoading(true);

              Agent.Login.loginBarber()
                .send({
                  eMail: eMail,
                  password: password,
                })
                .then((res) => {
                  if (res.ok) {
                    if (!res.body.Error) {
                      // console.log("login", res.body);
                      Storage.SetItem("barber", {
                        ...res.body.data,
                        password: "****",
                      });
                      setSigned(true);
                      setTimeout(() => {
                        history.push("/general-information");
                      }, 300);
                      setIsLoading(false);
                    } else {
                      setOpenConfirmModal(true);
                      setIsLoading(false);
                      setModalContent(res.body.Message);
                      console.log("hata", res.body.Message);
                    }
                  } else {
                    setIsLoading(false);
                  }
                });

              // Storage.SetItem("barber", { id: 1, falan: "falan" });
              // history.push("/");
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Henüz hesabın yok mu? Üye ol"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default Login;
