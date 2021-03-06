import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UploadSuccessMessage({ show, setShow }) {
  return (
    <div>
      <Modal
        open={show}
        onClose={() => {
          setShow(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Upload Successful
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Thank you for your contribution
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
