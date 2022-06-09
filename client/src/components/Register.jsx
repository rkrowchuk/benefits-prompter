import { useState } from "react";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: ""
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
      .then(setUser({ name: "", email: "", birthdate: "", password: "", confirmPassword: "" })) //resetting controlled component (name)
      // .then(e.target.reset()) //resetting uncontrolled components (not ideal?)
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
          value= {user.password || ""}
          />
        </label>
        <label>
          Confirm Password: 
          <input 
          type="password" 
          name="confirmPassword" 
          onChange={handleChange} 
          value= {user.confirmPassword || ""}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
