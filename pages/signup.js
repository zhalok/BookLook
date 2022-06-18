import { useEffect, useState } from "react";
import SignupAlertModal from "../components/Modals/SignupAlertModal";
import Loading from "../components/Modals/Loading";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [onLoader, setOnLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const signup = () => {
    if (
      name == "" ||
      email == "" ||
      password == "" ||
      confirmedPassword == ""
    ) {
      alert("Please full-fill the forms");
      return;
    }
    if (password != confirmedPassword) {
      alert("Password and confirmed password did not match");
      return;
    }
    setOnLoader(true);
    fetch("http://localhost:3000/api/user/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password, confirmedPassword }),
    })
      .then((res) => {
        if (res.status == 500) {
          alert("Email service error");
        }
        return res.json();
      })
      .then((data) => {
        setOnLoader(false);
        setShowModal(true);
      })
      .catch((e) => {
        setOnLoader(false);
        // console.log(e);
        alert(e);
      });
  };
  useEffect(() => {
    // document.body.style.backgroundColor = "white";
  });
  return (
    <div id="signup-form">
      <div>
        <SignupAlertModal show={showModal} setShow={setShowModal} />
        <Loading show={onLoader} />
      </div>
      <div>
        <h1>Register</h1>
      </div>
      <div>
        <input
          className="input-box"
          type="text"
          value={name}
          placeholder="Full Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          className="input-box"
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          className="input-box"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          className="input-box"
          type="password"
          value={confirmedPassword}
          placeholder="Confirmed Password"
          onChange={(e) => {
            setConfirmedPassword(e.target.value);
          }}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <button
          className="submit-button"
          onClick={() => {
            signup();
          }}
        >
          SignUp
        </button>
      </div>
      <div>
        <button style={{ backgroundColor: "red" }} className="submit-button">
          Login
        </button>
      </div>
    </div>
  );
}
