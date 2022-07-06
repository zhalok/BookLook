import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CommentBlock from "./CommentBlock";
export default function CommentList({ comments }) {
  // const router = useRouter();
  // const { bookId } = router.query;

  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/comments/read?bookId=${bookId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data.reverse();
  //       setComments(data);
  //     })
  //     .catch((e) => console.log(e));
  // }, [bookId]);

  return (
    <div style={{ marginTop: "50px" }}>
      {comments.map((e, index) => (
        <div key={index}>
          <CommentBlock Comment={e.comment} Commenter={e.commenter} />
        </div>
      ))}
    </div>
  );
}
