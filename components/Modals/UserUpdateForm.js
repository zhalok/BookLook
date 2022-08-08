import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Modal, Box, Button } from "@mui/material";
import email_validator from "../../utils/email_verifier";

export default function UserUpdateForm({
  updatedName,
  updatedEmail,
  setUpdatedName,
  setUpdatedEmail,
  show,
  setShow,
  updateUser,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    // p: 4,
    marginLeft: "auto",
    marginRight: "auto",
    padding: "50px",
  };
  return (
    <div>
      <Modal
        open={show}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={() => setShow(false)}
      >
        <Box sx={style}>
          <div>
            <h1>Update your information</h1>
          </div>
          <div>
            <TextField
              style={{ marginTop: "10px" }}
              fullWidth
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={updatedName}
              onChange={(e) => {
                setUpdatedName(e.target.value);
              }}
            />
          </div>
          <div>
            <TextField
              style={{ marginTop: "20px" }}
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={updatedEmail}
              onChange={(e) => {
                setUpdatedEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                console.log(updatedName);
                console.log(updatedEmail);
                if (
                  updatedName === "" ||
                  updatedEmail === "" ||
                  email_validator(updatedEmail) == false
                ) {
                  alert("Please give necessary information");
                } else updateUser();
              }}
              style={{ marginTop: "20px" }}
              fullWidth
            >
              Submit
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginTop: "10px" }}
              fullWidth
              onClick={() => {
                setUpdatedEmail("");
                setUpdatedName("");
                setShow(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
