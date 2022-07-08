import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

export default function CommentSection({ user }) {
  const router = useRouter();
  const { bookId } = router.query;
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [showSubmit, setShowSubmit] = useState("none");

  useEffect(() => {
    fetch(`http://localhost:3000/api/comments/read?bookId=${bookId}`)
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        setCommentList(data);
        console.log(commentList);
      })
      .catch((e) => console.log(e));
  }, [bookId]);

  useEffect(() => {
    setShowSubmit("block");
  }, [user]);

  const submitComment = () => {
    fetch("http://localhost:3000/api/comments/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        comment,
        commenter: user,
        bookId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        commentList.push(data[0]);
        commentList.reverse();
        setComment([...commentList]);
        setComment("");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div>
        <CommentBox
          comment={comment}
          setComment={setComment}
          showSubmit={showSubmit}
          submitComment={submitComment}
        />
      </div>
      <div style={{ margintTop: "50px" }}>
        <CommentList comments={commentList} />
      </div>
    </div>
  );
}
