import Grid from "@mui/material/Grid";
import UserBookCard from "../../components/Cards/UserBookCard";

export default function BookList({ booklist }) {
  return (
    <div>
      <Grid item xs={10} style={{ marginLeft: "auto", marginRight: "auto" }}>
        <Grid
          container
          spacing={1}
          style={{
            marginTop: "",
            marginBottom: "50px",
            padding: "20px",
          }}
        >
          {booklist.map((e, index) => (
            <Grid key={index} item xs={3} style={{ marginTop: "20px" }}>
              <UserBookCard info={e} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
