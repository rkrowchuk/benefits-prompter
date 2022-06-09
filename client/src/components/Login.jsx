import { useState } from "react";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
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
        ) //resetting controlled component (name)
        // .then(e.target.reset()) //resetting uncontrolled components (not ideal?)
        .catch((err) => {
          console.log("**error adding user**", err);
        })
    );
  }

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={handleChange}
            // value={user.email || ""}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleChange}
            // value={user.password || ""}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
