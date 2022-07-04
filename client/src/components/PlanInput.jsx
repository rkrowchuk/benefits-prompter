import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Category";

export default function PlanInput(props) {
  const [user, setUser] = useState(props.login.user);
  console.log("user", user);

  useEffect(() => {
    const currentUser = localStorage.getItem("benefitsUser");
    console.log("currentUser", currentUser);
    const benefitsUser = JSON.parse(currentUser);
    console.log("benefitsUser", benefitsUser);
    setUser(benefitsUser);
  }, []);
  // console.log("props", props.login);
  //App.js is parent component
  const [inputFields, setInputFields] = useState([
    {
      category: "",
      amount: 0,
    },
  ]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newCategory = { category: "", amount: 0 };
    setInputFields([...inputFields, newCategory]);
  };

  const submit = (e) => {
    e.preventDefault();
    const data = [inputFields, user];
    const postURL = "http://localhost:9000/planinput";
    return fetch(postURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  //Goals:
  // 1. Update the state and send the list of categories to the database (associate with user as well)

  // 2. retrieve localStorage (user email) to send it to backend with inputFields

  return (
    <div>
      <h3>Hi {user}</h3>
      Plan Input
      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name="category"
                placeholder="category"
                value={input.category}
                onChange={(event) => handleFormChange(index, event)}
              />
              <input
                name="amount"
                placeholder="amount"
                value={input.amount}
                onChange={(event) => handleFormChange(index, event)}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add Category</button>
      <button onClick={submit}>Submit Plan</button>
    </div>
  );
}
