import { useState, useEffect } from "react";
export default function CommentList() {
  const [commentLists, setCommentLists] = useState([]);
  useEffect(() => {
    fetch("");
  }, []);
  return (
    <div>
      {commentLists.map((e) => (
        <div>{e.comment}</div>
      ))}
    </div>
  );
}
