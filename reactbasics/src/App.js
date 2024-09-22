import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/home",
  //     element: <TextForm />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  // ]);

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#344966";
      showAlert("dark mode enablde", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtil"
        descrip="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <Routes>
        <Route
          path="/home"
          element={
            <TextForm
              mode={mode}
              showAlert={showAlert}
              heading="Enter Your Text"
            />
          }
        />
        <Route path="/about" element={<About mode={mode} />} />
        <Route
          path="/about"
          element={
            <TextForm
              mode={mode}
              showAlert={showAlert}
              heading="Enter Your Text"
            />
          }
        />
      </Routes>

      {/* <About /> */}
      {/* <TextForm mode={mode} showAlert={showAlert} heading="Enter Your Text" /> */}
    </>
  );
}

export default App;
