import { useState } from "react";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    birthdate: "",
    password: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const postURL = "http://localhost:9000/new";
    return fetch(postURL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(setUser({ name: "" })) //resetting controlled component (name)
      .then(e.target.reset()) //resetting uncontrolled components (not ideal?)
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
          Email: <input type="text" name="email" onChange={handleChange} />
        </label>
        <label>
          Birthdate:
          <input type="text" name="birthdate" onChange={handleChange} />
        </label>
        <label>
          Password: <input type="text" name="password" />
        </label>
        <label>
          Confirm Password: <input type="text" name="confirm-password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
