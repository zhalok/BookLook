import { TextField } from "@mui/material";
export default function CourseField({ course, setCourse }) {
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
        label="Course"
        variant="outlined"
        fullWidth
        value={course}
        onChange={(e) => {
          setCourse(e.target.value);
        }}
      />
    </div>
  );
}
