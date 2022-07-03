export default function CommentBlock({ Comment, Commenter }) {
  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        border: "1px solid black",
        marginTop: "10px",
      }}
    >
      <h3>{Comment}</h3>
      <p>- {Commenter}</p>
    </div>
  );
}
