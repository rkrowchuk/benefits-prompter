import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/App.scss";
export default function Login(props) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(user);
    const postURL = "http://localhost:9000/login";
    return (
      fetch(postURL, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(
          setUser({
            email: "",
            password: "",
          })
        )
        .then(navigate("/dashboard")) //resetting controlled component (name)
        // .then(e.target.reset()) //resetting uncontrolled components (not ideal?)
        .catch((err) => {
          console.log("**error adding user**", err);
        })
    );
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-containers">
          <label className="form-label">Email:</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={user.email || ""}
            placeholder="example@email.com"
            className="form-input"
          />

          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={user.password || ""}
            className="form-input"
          />
        </div>
        <button type="submit" className="primary-btn">
          Submit
        </button>
      </form>
      <Link to="/register" className="reg-link">
        Don't have an account?
      </Link>
    </div>
  );
}
