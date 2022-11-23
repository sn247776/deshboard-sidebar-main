import "./page.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const theme = createTheme();
export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#CB2D6F",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#CB2D6F",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#501F3A",
      },
      "&:hover fieldset": {
        borderColor: "#14A098",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#CB2D6F",
      },
    },
  });

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#501F3A"),
    backgroundColor: "#501F3A",
    "&:hover": {
      backgroundColor: "#CB2D6F",
    },
  }));

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <CssTextField
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
              control={
                <Checkbox
                  value="remember"
                  sx={{
                    color: "#501F3A",
                    "&.Mui-checked": {
                      color: "#501F3A",
                    },
                  }}
                />
              }
              label="Remember me"
            />
            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </ColorButton>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  sx={{
                    color: "#501F3A",
                  }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/signup"
                  variant="body2"
                  sx={{
                    color: "#501F3A",
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <div>
          <div className="social-login">
            <hr />
            OR
            <hr />
          </div>
          <div className="social-media">
            <div className="fb-icon">
              <FacebookIcon />
            </div>
            <div className="g-icon">
              <GoogleIcon />
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}
