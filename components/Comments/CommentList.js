import CommentBlock from "./CommentBlock";
export default function CommentList() {
  const comments = [
    { comment: "Nice book", commenter: "Zhalok" },
    {
      comment: "Very Very Noice Book",
      commenter: "Kaifa",
    },
  ];
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
