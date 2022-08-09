import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserProfileCard from "../../components/Cards/UserInfoCard";
import Appbar from "../../components/Decoration/Appbar";
import UserBookList from "../../components/Lists/UserBookList";
import UserUpdateForm from "../../components/Modals/UserUpdateForm";
import Loading from "../../components/Modals/Loading";
import AlertMessage from "../../components/Alerts/AlertMessage";
import jwt from "jsonwebtoken";

export default function UserProfile() {
  const [bookList, setBookList] = useState([]);
  const [recommendationList, setReccommendationList] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [showUserUpdateForm, setShowUserUpdateForm] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [showProgress, setShowProgress] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isCurrentUser, setIsCurrentUser] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/books/get-by-uploader?uploader=${id}`)
        .then((res) => res.json())
        .then((data) => setBookList(data))
        .catch((e) => alert(e));

      fetch(
        `http://localhost:3000/api/books/get-by-recommendation?userId=${id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setReccommendationList(data);
        })
        .catch((e) => alert(e));

      fetch(`http://localhost:3000/api/user/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length == 0) {
            throw new Error("User Not Found");
            return;
          }
          setUserName(data[0].name);
          setUserEmail(data[0].email);
        })
        .catch((e) => {
          setAlertMessage("User Not found");
          setAlertSeverity("error");
          setShowAlert(true);
          setTimeout(1000);
          setShowAlert(false);
          router.push("/");
        });
    }
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      const userInfo = jwt.decode(userToken);
      console.log(userInfo);
      console.log(id);
      if (userInfo.userId != id) setIsCurrentUser(false);
      else setIsCurrentUser(true);
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
        setAlertMessage("Updated Successfully");
        setAlertSeverity("success");
        setShowAlert(true);
        setTimeout(1000);
        window.location.reload();
      })
      .catch((e) => {
        setShowProgress(false);
        alert(e);
      });
  };

  const deleteUser = () => {
    setShowProgress(true);
    fetch(`http://localhost:3000/api/user/delete/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        setShowProgress(false);
        setAlertMessage("User Deleted Successfully");
        setAlert(true);
        setTimeout(1000);
        localStorage.removeItem("userToken");
        router.push("/");
      });
  };

  return (
    <div>
      <Appbar />
      <Loading show={showProgress} />
      <AlertMessage
        open={showAlert}
        setOpen={setShowAlert}
        message={alertMessage}
        severity={alertSeverity}
      />

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
            isCurrentUser={isCurrentUser}
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
