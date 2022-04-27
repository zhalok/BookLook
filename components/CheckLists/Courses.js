import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Checkbox, Button } from "@mui/material";

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

export default function Catagories({
  catagories,
  setCatagories,
  show,
  setShow,
}) {
  return (
    <div
      style={{
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#eeeeff",
        marginTop: "20px",
      }}
    >
      <Modal
        open={show}
        onClose={() => {
          setShow(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              height: "300px",
              overflowY: "auto",
            }}
          >
            {catagories.map((e, index) => (
              <MenuItem value={e.name} key={index}>
                <Checkbox
                  checked={e.selected}
                  onChange={(event) => {
                    setCatagories((prevState) => {
                      let newState = [...prevState];
                      newState[index].selected = event.target.checked;
                      return newState;
                    });
                  }}
                />
                {e.name}
              </MenuItem>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );

  // }
}
