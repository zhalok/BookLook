import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserProfileCard from "../../components/Cards/UserInfoCard";
import styles from "../../styles/Home.module.css";
import Appbar from "../../components/Decoration/Appbar";
import UserBookList from "../../components/Lists/UserBookList";
import { height } from "@mui/system";

export default function UserProfile() {
  const [bookList, setBookList] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch(`http://localhost:3000/api/books/get-by-uploader?uploader=${id}`)
      .then((res) => res.json())
      .then((data) => setBookList(data))
      .catch((e) => alert(e));
    fetch("");
  }, [id]);

  return (
    <div>
      <Appbar />
      <div className="user-profile-page">
        <div>
          <UserProfileCard />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div style={{ marginTop: "0px" }}>
            <h1 style={{ marginTop: "0px" }}> Recommendations </h1> <div></div>
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
