import { TextField } from "@mui/material";
export default function AuthorField({ author, setAuthor }) {
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
      <TextField
        id="outlined-basic"
        label="Author"
        variant="outlined"
        value={author}
        fullWidth
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
    </div>
  );
}
