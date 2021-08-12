import logo from "./logo.svg";
import "./App.css";
import { withRouter } from "react-router-dom";
import Routes from "./components/Routes";
import { useState, useEffect } from "react";

function App() {
  const [students, setStudents] = useState([]);
  useEffect(async () => {
    const resposne = await fetch("http://localhost:8000/api/students");
    const data = await resposne.json();
    setStudents(data.student);
  }, []);
  return (
    <>
      <Routes />
    </>
  );
}

export default withRouter(App);
