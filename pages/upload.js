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
import CourseField from "../components/SelectFields/CourseField";

export default function UploadBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publication, setPublication] = useState("");
  const [publicationList, setPublicationList] = useState([]);
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
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    document.body.style.backgroundColor = "#eeeeff";
    setUploader("zhalok");
    fetch("http://localhost:3000/api/courses/get-all?name=")
      .then((res) => res.json())
      .then((data) => {
        setCourseList(data);
      })
      .catch((e) => console.log(e));
    fetch("http://localhost:3000/api/publications/get-all?name=")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPublicationList(data);
      })
      .catch((e) => console.log(e));
    fetch("http://localhost:3000/api/catagories/get-all")
      .then((res) => res.json())
      .then((data) => {
        const _data = [];
        for (let i = 0; i < data.length; i++) {
          _data.push({ name: data[i], selected: false });
        }
        setCatagories(_data);
      })
      .catch((e) => console.log(e));
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
    const selected_catagories = [];
    for (let i = 0; i < catagories.length; i++)
      if (catagories[i].selected) selected_catagories.push(catagories[i].name);

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
            catagories: selected_catagories,
            reviews: 0,
            uploader,
            upload_time: DateGenerator(),
          }),
        }
      );
      const data = await response.json();

      const prom = await uploadFile(data[0].id);

      setName("");
      setAuthor("");
      setEdition("");
      setPublication("");
      setAvailibility("");
      setLoading(false);
      setSuccessMessage(true);
      setFile("");
      setFileName("");
      setCourse("");
      for (let i = 0; i < catagories.length; i++)
        catagories[i].selected = false;
    } catch (e) {
      alert(e);
    }
  };

  const upload = () => {};

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
          publicationList={publicationList}
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
        <CourseField
          courseList={courseList}
          course={course}
          setCourse={setCourse}
        />
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
