import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [toggleText, setToggleText] = useState("Enable Mode");
  const [alert, setAlert] = useState(null);
  const [btnColor, setBtnColor] = useState("primary");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (cls === "primary" || cls === "danger" || cls === "success") {
      setBtnColor("light");
    } else {
      setBtnColor("primary");
    }

    if (mode === "light") {
      setMode("dark");
      setToggleText("Enable Mode");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      setToggleText("Enable Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
    }
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          toggleText={toggleText}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter text below"
                  mode={mode}
                  showAlert={showAlert}
                  btnColor={btnColor}
                />
              }
            />
          </Routes>
        </div>
      </Router>
      {/* <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        toggleText={toggleText}
      />
      <Alert alert={alert} />
      <div className="container"> 
        <TextForm
          heading="Enter text below"
          mode={mode}
          showAlert={showAlert}
        />
        <About mode={mode} />
      </div> */}
    </>
  );
}

export default App;
