import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Category";

// parent component is App

export default function PlanInput(props) {
  const [user, setUser] = useState(props.login.user);

  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("benefitsUser");
    const benefitsUser = JSON.parse(currentUser);
    setUser(benefitsUser);
  }, []);

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
    }).then(navigate("/dashboard"));
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

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
