import { useEffect, useState } from "react";

export default function CommentBlock({ Comment, Commenter }) {
  const [commenterName, setCommenterName] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3000/api/user/read/${Commenter}`)
      .then((res) => res.json())
      .then((data) => setCommenterName(data[0].name))
      .catch((e) => console.log(e));
  }, [Commenter]);

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
      <p>- {commenterName}</p>
    </div>
  );
}
