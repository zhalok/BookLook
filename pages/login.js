import { useEffect, useState } from "react";
import SignupAlertModal from "../components/Modals/SignupAlertModal";
import Loading from "../components/Modals/Loading";
import Navbar from "../components/Decoration/Appbar";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [onLoader, setOnLoader] = useState(false);

  const login = () => {
    if (email == "" || password == "") {
      alert("Please provide valid credentials");
      return;
    }
    setOnLoader(true);
    fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOnLoader(false);
        console.log(data);
        if (data.message && data.message == "Unauthenticated") {
          alert(data.message);

          return;
        }

        localStorage.setItem("userToken", data.token);
        setOnLoader(false);
        router.push("/");
      })
      .catch((e) => alert(e));
  };

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) router.push("/");
  }, []);

  return (
    <div>
      <Navbar />
      <Loading show={onLoader} />
      {/* <SignupAlertModal show={showModal} setShow={setShowModal} /> */}
      <div className="box">
        <div>
          <h1>Login</h1>
        </div>
        <div className="vertical">
          {/* <input
            className="text-input"
            type="text"
            id="name"
            name="firstname"
            placeholder="Your name.."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          /> */}
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
          {/* <input
            className="text-input"
            type="password"
            id="confirmed-password"
            name="confirmed-password"
            placeholder="Confirmed password.."
            onChange={(e) => {
              setConfirmedPassword(e.target.value);
            }}
          /> */}
        </div>
        <div className="vertical" style={{ marginTop: "15px" }}>
          <button
            className="submit"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              login();
            }}
          >
            Login
          </button>
          <div className="div-center">Or,</div>
          <button
            className="submit"
            onClick={() => {
              router.push("/signup");
            }}
          >
            SignUp
          </button>
        </div>
        <div className="horizontal"></div>
      </div>
    </div>
  );
}
