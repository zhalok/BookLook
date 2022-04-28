import { useEffect, useState } from "react";
import UploadButton from "../components/Buttons/UploadButton";
import DateGenerator from "../utils/DateFormatter";
import Appbar from "../components/Decoration/Appbar";
import styles from "../styles/Home.module.css";
import Loading from "../components/Modals/Loading";
import storage from "../utils/firebaseConnection";
import { ref, uploadBytes } from "@firebase/storage";
import UploadSuccessMessage from "../components/Modals/UploadSuccessMessage";
import Catagories from "../components/CheckLists/Catagories";
import NameField from "../components/TextFields/NameField";
import AuthorField from "../components/TextFields/AuthorField";
import UploadSubmitButton from "../components/Buttons/UploadSubmitButton";
import PublicationField from "../components/SelectFields/PublicationField";
import EditionField from "../components/TextFields/EditionField";
import AvailibilityField from "../components/SelectFields/AvailibilityField";
import { Button } from "@mui/material";
import CourseField from "../components/TextFields/CourseField";

export default function UploadBook(props) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publication, setPublication] = useState("");
  const [edition, setEdition] = useState("");
  const [availibility, setAvailibility] = useState("");
  const [catagories, setCatagories] = useState([]);
  const [uploader, setUploader] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [fileName, setFileName] = useState("");
  const [showCatagories, setShowCatagories] = useState(false);
  const [course, setCourse] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = "#eeeeff";
    setUploader("zhalok");
    setCatagories(props.catagories);
  }, []);

  const uploadFile = async (id) => {
    let promise = new Promise((resolve, reject) => {
      const fileRef = ref(storage, `${id}`);
      uploadBytes(fileRef, file).then(
        (snapshot) => {
          resolve(true);
        },
        (err) => {
          reject(err);
        }
      );
    });
    return promise;
  };

  const uploadData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3000/api/books/uploadInfo",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            author,
            publication,
            edition,
            availibility,
            course,
            reviews: 0,
            uploader,
            uploadTime: DateGenerator(),
          }),
        }
      );
      const data = await response.json();
      // console.log(data[0].id);
      // const prom = await uploadFile(data[0].id);
      // console.log(prom);
      setName("");
      setAuthor("");
      setEdition("");
      setPublication("");
      setAvailibility("");
      setLoading(false);
      setSuccessMessage(true);
      setFile("");
      setFileName("");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className={styles.container}>
      <Appbar />
      <Loading show={loading} />
      <UploadSuccessMessage show={successMessage} setShow={setSuccessMessage} />
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "40%",
          marginTop: "50px",
          backgroundColor: "white",
          padding: "20px",
          marginBottom: "50px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Contribute</h2>

        <NameField name={name} setName={setName} />
        <AuthorField author={author} setAuthor={setAuthor} />
        <PublicationField
          publication={publication}
          setPublication={setPublication}
        />

        <EditionField edition={edition} setEdition={setEdition} />
        <AvailibilityField
          availibility={availibility}
          setAvailibility={setAvailibility}
        />
        <Catagories
          catagories={catagories}
          setCatagories={setCatagories}
          show={showCatagories}
          setShow={setShowCatagories}
        />
        <CourseField course={course} setCourse={setCourse} />
        <div
          id="select-catagory-button"
          style={{
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#eeeeff",
            marginTop: "20px",
          }}
        >
          <Button
            fullWidth
            style={{ textAlign: "center" }}
            onClick={() => {
              setShowCatagories(true);
            }}
          >
            Select Catagories
          </Button>
        </div>

        <UploadButton
          setFile={setFile}
          setFileName={setFileName}
          fileName={fileName}
        />

        <UploadSubmitButton uploadData={uploadData} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const catagories_response = await fetch(
    "http://localhost:3000/api/catagories/get-all"
  );
  const catagories = await catagories_response.json();

  return {
    props: { catagories },
  };
}
