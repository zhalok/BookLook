import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PublicationField({
  publication,
  setPublication,
  publicationList,
}) {
  // const [publicationList, setPublicationList] = useState([]);

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
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Publications</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={publication}
            label="Publications"
            onChange={(e) => {
              setPublication(e.target.value);
            }}
          >
            {publicationList.map((info, index) => (
              <MenuItem key={index} value={info}>
                {info}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
