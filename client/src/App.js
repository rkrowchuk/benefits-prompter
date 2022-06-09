import { React, useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message))
  //     .catch((err) => console.log("error:", err));
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Register />
        <Login />
      </header>
    </div>
  );
}
