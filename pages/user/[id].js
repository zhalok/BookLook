import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserProfileCard from "../../components/Cards/UserInfoCard";
import Appbar from "../../components/Decoration/Appbar";
import UserBookList from "../../components/Lists/UserBookList";
import UserUpdateForm from "../../components/Modals/UserUpdateForm";
import Loading from "../../components/Modals/Loading";
import SuccessAlert from "../../components/Alerts/SuccessAlert";

export default function UserProfile() {
  const [bookList, setBookList] = useState([]);
  const [recommendationList, setReccommendationList] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [showUserUpdateForm, setShowUserUpdateForm] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [showProgress, setShowProgress] = useState(false);
  const [success, setSuccess] = useState(false);

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
    if (id) {
      fetch(`http://localhost:3000/api/user/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserName(data[0].name);
          setUserEmail(data[0].email);
        });
    }
  }, [id]);

  const updateUser = () => {
    setShowUserUpdateForm(false);
    setShowProgress(true);
    fetch(`http://localhost:3000/api/user/update/${id}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: updatedName, email: updatedEmail }),
    })
      .then((res) => {
        if (res.status != 200) throw new Error("Something wrong");
        else return res.json();
      })
      .then((data) => {
        console.log(data);
        setShowProgress(false);
        setSuccess(true);
        setTimeout(1000);
        window.location.reload();
      })
      .catch((e) => {
        setShowProgress(false);
        alert(e);
      });
  };

  return (
    <div>
      <Appbar />
      <Loading show={showProgress} />
      <SuccessAlert open={success} setOpen={setSuccess} />
      <UserUpdateForm
        show={showUserUpdateForm}
        setShow={setShowUserUpdateForm}
        updatedEmail={updatedEmail}
        updatedName={updatedName}
        setUpdatedName={setUpdatedName}
        setUpdatedEmail={setUpdatedEmail}
        updateUser={updateUser}
      />
      <div className="user-profile-page">
        <div>
          <UserProfileCard
            Name={userName}
            Email={userEmail}
            Recommendations={recommendationList.length}
            Contributions={bookList.length}
            updateFormController={setShowUserUpdateForm}
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
