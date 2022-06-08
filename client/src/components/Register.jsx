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
    // console.log("e", e);
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("user", user);
    const postURL = "http://localhost:9000/new";
    // const bodyData = { name: "Katie", birthdate: "2000-11-05" };
    return (
      fetch(postURL, {
        method: "POST",
        // mode: "no-cors",
        body: JSON.stringify(user),
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //   name: user.name,
        //   email: user.email,
        //   birthdate: user.birthdate,
        //   password: user.password
        // })
      })
        // .then((res) => res.json())
        .then((res) => console.log("res", res))
        // .then(() => {
        //   alert("User has been added to the database");
        // })
        .catch((err) => {
          console.log("error adding user", err);
        })
    );
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
