import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

export default function CommentSection() {
  return (
    <div>
      <div>
        <CommentBox />
      </div>
      <div style={{ margintTop: "50px" }}>
        <CommentList />
      </div>
    </div>
  );
}
