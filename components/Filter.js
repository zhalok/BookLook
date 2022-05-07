import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import FilterParam from "./Modals/FilterParam";
import { useEffect, useState } from "react";
export default function Filter({ setBooks }) {
  const [showAuthors, setShowAuthors] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [showPublications, setShowPublications] = useState(false);
  const [publications, setPublications] = useState([]);
  const [catagories, setCatagories] = useState([]);
  const [showCatagories, setShowCatagories] = useState(false);
  const [courses, setCourses] = useState([]);
  const [showCourses, setShowCourses] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/api/authors/get-all`)
      .then((res) => res.json())
      .then((data) => {
        let _info = [];
        for (let i = 0; i < data.length; i++) {
          const name = data[i];
          _info.push({ name, selected: false });
        }
        setAuthors(_info);
      })
      .catch((err) => console.log(err));

    fetch(`http://localhost:3000/api/publications/get-all`)
      .then((res) => res.json())
      .then((data) => {
        let _info = [];
        for (let i = 0; i < data.length; i++) {
          const name = data[i];
          _info.push({ name, selected: false });
        }

        setPublications(_info);
      })
      .catch((err) => console.log(err));

    fetch(`http://localhost:3000/api/catagories/get-all`)
      .then((res) => res.json())
      .then((data) => {
        let _info = [];
        for (let i = 0; i < data.length; i++) {
          const name = data[i];
          _info.push({ name, selected: false });
        }

        setCatagories(_info);
      })
      .catch((err) => console.log(err));

    fetch(`http://localhost:3000/api/courses/get-all`)
      .then((res) => res.json())
      .then((data) => {
        let _info = [];
        for (let i = 0; i < data.length; i++) {
          const name = data[i];
          _info.push({ name, selected: false });
        }

        setCourses(_info);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterBooks = () => {
    const authorList = [];
    const publicationList = [];
    const catagoryList = [];
    const coursesList = [];

    for (let i = 0; i < authors.length; i++)
      if (authors[i].selected == true) authorList.push(authors[i].name);
    for (let i = 0; i < publications.length; i++)
      if (publications[i].selected == true)
        publicationList.push(publications[i].name);
    for (let i = 0; i < catagories.length; i++)
      if (catagories[i].selected == true) catagoryList.push(catagories[i].name);
    for (let i = 0; i < courses.length; i++)
      if (courses[i].selected == true) coursesList.push(courses[i].name);

    console.log(authorList, publicationList, catagoryList, coursesList);

    fetch("http://localhost:3000/api/books/filter-books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        authors: authorList,
        publications: publicationList,
        catagories: catagoryList,
        courses: coursesList,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          display: "grid",
          columnGap: "10px",
          gridTemplateColumns: "auto auto auto auto auto",
          width: "50%",
        }}
      >
        <div>
          <FilterParam
            paramName={"authors"}
            show={showAuthors}
            setShow={setShowAuthors}
            info={authors}
            setInfo={setAuthors}
          />
          <Button
            onClick={() => {
              setShowAuthors(true);
            }}
          >
            Select Authors
          </Button>
        </div>
        <div>
          <FilterParam
            show={showPublications}
            setShow={setShowPublications}
            info={publications}
            setInfo={setPublications}
          />
          <Button
            onClick={() => {
              setShowPublications(true);
            }}
          >
            Select Publications
          </Button>
        </div>
        <div>
          <FilterParam
            show={showCatagories}
            setShow={setShowCatagories}
            info={catagories}
            setInfo={setCatagories}
          />
          <Button
            onClick={() => {
              setShowCatagories(true);
            }}
          >
            Select Catagories
          </Button>
        </div>
        <div>
          <FilterParam
            show={showCourses}
            setShow={setShowCourses}
            info={courses}
            setInfo={setCourses}
          />
          <Button
            onClick={() => {
              setShowCourses(true);
            }}
          >
            {" "}
            Select Courses
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              filterBooks();
            }}
            variant="contained"
          >
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
}
