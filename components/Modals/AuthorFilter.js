import styles from "../../styles/Home.module.css";
import { Modal, Box, Typography, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";

export default function AuthorFilter({ show, setShow }) {
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

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/authors/get-all")
      .then((res) => res.json())
      .then((data) => {
        let _authors = [];
        for (let i = 0; i < data.length; i++) {
          const name = data[i].author;
          _authors.push({ name, selected: false });
        }
        return setAuthors(_authors);
      })
      .catch((err) => console.log(err));
  }, []);

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
            {authors.map((e, index) => (
              <MenuItem value={e.name} key={index}>
                {e.name}
              </MenuItem>
            ))}
            {/* {authors.map((e, index) => (
              <MenuItem value={e.name} key={index}>
                <Checkbox
                  checked={e.selected}
                  onChange={(event) => {
                    setAuthors((prevState) => {
                      let newState = [...prevState];
                      newState[index].selected = event.target.checked;
                      return newState;
                    });
                  }}
                />
                {e.name}
              </MenuItem>
            ))} */}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
