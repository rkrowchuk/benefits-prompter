import { React, useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import PlanInput from "./components/PlanInput";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

export default function App() {
  const [login, setLogin] = useState({
    status: false,
    user: {},
  });

  const handleLogin = (data) => {
    // console.log("data", data);
    setLogin({
      status: true,
      user: data,
    });
    localStorage.setItem("benefitsUser", JSON.stringify(data.email));
  };

  // const handleLogout = () => {
  //   setLogin({
  //     status: false,
  //     user: {},
  //   });
  // };

  // const loginStatus = () => {
  //   axios
  //     .get("/api/logged_in", { withCredentials: true }) //what does this mean?
  //     .then((response) => {
  //       if (response.data.logged_in) {
  //         handleLogin(response.data);
  //         localStorage.setItem("benefitsUser", JSON.stringify(response.data));
  //       } else {
  //         handleLogout();
  //       }
  //     })
  //     .catch((error) => console.log("api errors:", error));
  // };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/register"
            element={<Register handleLogin={handleLogin} />}
          />
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
          <Route path="/planinput" element={<PlanInput login={login.user} />} />
          <Route path="/dashboard" element={<Dashboard login={login} />} />
        </Routes>
      </Router>
    </div>
  );
}
