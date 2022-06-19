import { useEffect, useState } from "react";
import SignupAlertModal from "../components/Modals/SignupAlertModal";
import Loading from "../components/Modals/Loading";
import { useRouter } from "next/router";
export default function SignUp() {
  const router = useRouter();
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

  return (
    <div>
      <Loading show={onLoader} />
      <SignupAlertModal show={showModal} setShow={setShowModal} />
      <div className="box">
        <div>
          <h1>Register</h1>
        </div>
        <div className="vertical">
          <input
            className="text-input"
            type="text"
            id="name"
            name="firstname"
            placeholder="Your name.."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="text-input"
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="text-input"
            type="password"
            id="password"
            name="password"
            placeholder="Your password.."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            className="text-input"
            type="password"
            id="confirmed-password"
            name="confirmed-password"
            placeholder="Confirmed password.."
            onChange={(e) => {
              setConfirmedPassword(e.target.value);
            }}
          />
        </div>
        <div className="vertical" style={{ marginTop: "15px" }}>
          <button
            className="submit"
            onClick={() => {
              signup();
            }}
          >
            SignUp
          </button>
          <div className="div-center">Or,</div>
          <button
            className="submit"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </button>
        </div>
        <div className="horizontal"></div>
      </div>
    </div>
  );
}
