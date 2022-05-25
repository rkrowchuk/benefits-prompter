import { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    birthdate: "",
  });

  function handleChange(e) {
    // console.log("e", e);
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("user", user);
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
