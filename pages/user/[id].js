import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserProfileCard from "../../components/Cards/UserInfoCard";
import Appbar from "../../components/Decoration/Appbar";
import UserBookList from "../../components/Lists/UserBookList";

export default function UserProfile() {
  const [bookList, setBookList] = useState([]);
  const [recommendationList, setReccommendationList] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch(`http://localhost:3000/api/books/get-by-uploader?uploader=${id}`)
      .then((res) => res.json())
      .then((data) => setBookList(data))
      .catch((e) => alert(e));
    fetch("");

    fetch(`http://localhost:3000/api/books/get-by-recommendation?userId=${id}`)
      .then((res) => res.json())
      .then((data) => setReccommendationList(data))
      .catch((e) => alert(e));

    fetch(`http://localhost:3000/api/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserName(data[0].name);
        setUserEmail(data[0].email);
      });
  }, [id]);

  return (
    <div>
      <Appbar />
      <div className="user-profile-page">
        <div>
          <UserProfileCard
            Name={userName}
            Email={userEmail}
            Recommendations={recommendationList.length}
            Contributions={bookList.length}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div style={{ marginTop: "0px" }}>
            <h1 style={{ marginTop: "0px" }}> Recommendations </h1>

            <div style={{ overflowX: "auto" }}>
              <UserBookList booklist={bookList} />
            </div>
          </div>

          <div>
            {" "}
            <h1> Contributitons </h1>{" "}
            <div style={{ overflowX: "auto" }}>
              <UserBookList booklist={bookList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
