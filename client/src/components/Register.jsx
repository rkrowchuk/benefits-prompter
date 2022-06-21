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
    <div>
      Register
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={user.name || ""}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={user.email || ""}
          />
        </label>
        <label>
          Birthdate:
          <input
            type="text"
            name="birthdate"
            onChange={handleChange}
            value={user.birthdate || ""}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password || ""}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={user.confirmPassword || ""}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Link to="/" className="login-link">
        Already have an account? Login here.
      </Link>
    </div>
  );
}
