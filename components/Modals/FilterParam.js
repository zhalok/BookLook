import styles from "../../styles/Home.module.css";
import { Modal, Box, MenuItem, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";

export default function FilterParam({ show, setShow, info, setInfo }) {
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

  return (
    <div className={styles.container}>
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
            {info.map((e, index) => (
              <MenuItem value={e.name} key={index}>
                <Checkbox
                  checked={e.selected}
                  onChange={(event) => {
                    setInfo((prevState) => {
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
}
