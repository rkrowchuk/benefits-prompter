import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Category";

export default function PlanInput() {
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

  //Goals:
  // 1. Render each chosen category in a list within the <form>

  // 2. Update the state and send the list of categories to the database (associate with user as well)

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
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add Category</button>
      <button onClick={submit}>Submit Plan</button>
    </div>
  );
}
