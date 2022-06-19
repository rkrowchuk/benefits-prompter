import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Category";

export default function PlanInput() {
  //App.js is parent component
  const [inputFields, setInputFields] = useState([{ category: "", amountCovered: "" }])



  //Goals:
  // 1. Render each chosen category in a list within the <form>

  // 2. Update the state and send the list of categories to the database (associate with user as well)

  return (
    <div>
      Plan Input
      <form>
        <label>Category:</label>
        <input type="text"></input>
        <label>Amount Covered</label>
        <input type="text"></input>
        {/* <select>
          <option name="Category" value="ambulance">Ambulance</option>
          <option name="Category" value="clinic-visit">Clinic Visit</option>
          <option name="Category" value="counselling">Counselling</option>
          <option name="Category" value="dental">Dental</option>
          <option name="Category" value="disability">Disability</option>
          <option name="Category" value="fertility">Fertility</option>
          <option name="Category" value="health-spending">Health Spending</option>
          <option name="Category" value="massage">Massage</option>
          <option name="Category" value="orthodontics">Orthodontics</option>
          <option name="Category" value="orthotics">Orthotics</option>

          <option name="Category" value="physio">Physiotherapy</option>
          <option name="Category" value="prescription">Prescription</option>
          <option name="Category" value="psychologist">Psychologist</option>
          <option name="Category" value="travel-insurance">Travel Insurance</option>
          <option name="Category" value="vaccinations">Vaccinations</option>
          <option name="Category" value="vision">Vision</option>

          {/* <option value="other">Other</option> */}
        {/* </select> */}
        {/* <label>Add a category</label>
    <input type="text"></input> */}
      </form>
      <button>Add Category</button>
      <button>Submit Plan</button>
    </div>
  );
}
