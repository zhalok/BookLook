import Grid from "@mui/material/Grid";
import BookCard from "../../components/Cards/BookCard";

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
              <BookCard info={e} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
