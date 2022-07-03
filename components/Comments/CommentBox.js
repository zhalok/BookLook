import * as React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@mui/material";
export default function CommentBox() {
  return (
    <div>
      <div>
        <TextareaAutosize
          maxRows={4}
          aria-label="maximum height"
          placeholder="Add a comment"
          style={{ width: "100%", height: "200px" }}
        />
      </div>
      <div
        style={{
          width: "fit-content",
          marginLeft: "auto",
        }}
      >
        <Button variant="contained">Add Comment</Button>
      </div>
    </div>
  );
}
