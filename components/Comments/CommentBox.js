import * as React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@mui/material";
export default function CommentBox({
  comment,
  setComment,
  showSubmit,
  submitComment,
}) {
  return (
    <div>
      <div>
        <TextareaAutosize
          maxRows={4}
          aria-label="maximum height"
          placeholder="Add a comment"
          style={{ width: "100%", height: "200px" }}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          width: "fit-content",
          marginLeft: "auto",
        }}
      >
        <Button
          style={{ display: showSubmit }}
          variant="contained"
          onClick={() => {
            submitComment();
          }}
        >
          Add Comment
        </Button>
      </div>
    </div>
  );
}
