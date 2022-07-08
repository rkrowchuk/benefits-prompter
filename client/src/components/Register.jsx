import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(user);
    const postURL = "http://localhost:9000/register";
    return fetch(postURL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        setUser({
          name: "",
          email: "",
          birthdate: "",
          password: "",
          confirmPassword: "",
        })
      )
      .then(navigate("/planinput"))
      .catch((err) => {
        console.log("**error adding user**", err);
      });
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-containers">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={user.name || ""}
            className="form-input"
            placeholder="first name + last name"
          />

          <label className="form-label">Email: </label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={user.email || ""}
            className="form-input"
            placeholder="example@email.com"
          />

          <label className="form-label">Birthdate: </label>
          <input
            type="text"
            name="birthdate"
            onChange={handleChange}
            value={user.birthdate || ""}
            className="form-input"
            placeholder="YYYY-MM-DD"
          />

          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password || ""}
            className="form-input"
            placeholder="choose your password"
          />

          <label className="form-label">Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={user.confirmPassword || ""}
            className="form-input"
            placeholder="type your password again"
          />
        </div>
        <button type="submit" className="primary-btn">
          Submit
        </button>
      </form>
      <Link to="/" className="reg-link">
        Already have an account? Login here.
      </Link>
    </div>
  );
}
