import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import AuthorFilter from "./Modals/AuthorFilter";
import { useState } from "react";
export default function Filter({}) {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.container}>
      <div
        style={{
          display: "grid",
          columnGap: "10px",
          gridTemplateColumns: "auto auto auto auto auto",
          width: "50%",
        }}
      >
        <div>
          <Button variant="contained">Filter</Button>
        </div>
        <div>
          <AuthorFilter show={show} setShow={setShow} />
          <Button
            onClick={() => {
              setShow(true);
            }}
          >
            Select Authors
          </Button>
        </div>
        <div>
          <Button>Select Publications</Button>
        </div>
        <div>
          <Button>Select Catagories</Button>
        </div>
        <div>
          <Button>Select Courses</Button>
        </div>
      </div>
    </div>
  );
}
