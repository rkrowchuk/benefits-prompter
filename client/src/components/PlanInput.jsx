import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Category";

export default function PlanInput(props) {
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
    console.log(inputFields);
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
