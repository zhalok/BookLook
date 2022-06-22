import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Co2Sharp } from "@mui/icons-material";

const pages = [
  { name: "Books", link: "/" },
  { name: "Contribute", link: "/upload" },
];

const Appbar = () => {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState(null);
  // const [anchorElNav, setAnchorElNav] =
  //   (useState < null) | (HTMLElement > null);
  // const [anchorElUser, setAnchorElUser] =
  //   (useState < null) | (HTMLElement > null);

  const loggedin_settings = (
    <div>
      <div style={{ marginRight: "10px" }}>
        <Link href={`/profile/${loggedInUser}`}>
          <a>
            <Typography textAlign="center">Profile</Typography>
          </a>
        </Link>
      </div>
      <div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            localStorage.removeItem("userToken");
            window.location.reload();
            // router.push("/");
          }}
        >
          <Typography textAlign="center">Logout</Typography>
        </div>
      </div>
    </div>
  );
  const loggedout_settings = [
    { label: "login", link: "/login" },
    { label: "signup", link: "/signup" },
  ].map((e) => (
    <div style={{ marginRight: "10px" }}>
      <Link href={e.link}>
        <a>{e.label}</a>
      </Link>
    </div>
  ));

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    console.log(token);
    console.log(loggedInUser);
    // console.log(token.split("."));
    if (!token) return;
    // console.log(process.env.SECRET_KEY);
    const dec = jwt.decode(token);
    // console.log(dec);

    setLoggedInUser(dec.userId);
  }, []);

  const settings = loggedInUser ? loggedin_settings : loggedout_settings;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link href="/">
              <a>BookLook</a>
            </Link>
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link href={page.link} key={index}>
                <a>
                  <Button
                    key={index}
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.name}
                  </Button>
                </a>
              </Link>
            ))}
          </Box>

          {loggedInUser ? loggedin_settings : loggedout_settings}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Appbar;
