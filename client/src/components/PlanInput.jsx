import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Category";

export default function PlanInput() {
  //App.js is parent component
  // const [inputFields, setInputFields] = useState([ { RenewalDate: "", Category: ""}])

  //Goals:
  // 1. Render each chosen category in a list within the <form>

  // 2. Update the state and send the list of categories to the database (associate with user as well)

  return (
    <div>
      Plan Input
      <form>
        <label>
          Renewal Date:<input type="date"></input>
        </label>
        <label>Category:</label>
        <select>
          <option value="ambulance">Ambulance</option>
          <option value="clinic-visit">Clinic Visit</option>
          <option value="counselling">Counselling</option>
          <option value="dental">Dental</option>
          <option value="disability">Disability</option>
          <option value="fertility">Fertility</option>
          <option value="health-spending">Health Spending</option>
          <option value="massage">Massage</option>
          <option value="orthodontics">Orthodontics</option>
          <option value="orthotics">Orthotics</option>

          <option value="physio">Physiotherapy</option>
          <option value="prescription">Prescription</option>
          <option value="psychologist">Psychologist</option>
          <option value="travel-insurance">Travel Insurance</option>
          <option value="vaccinations">Vaccinations</option>
          <option value="vision">Vision</option>

          {/* <option value="other">Other</option> */}
        </select>
        {/* <label>Add a category</label>
    <input type="text"></input> */}
      </form>
      <button>Add Category</button>
      <button>Submit Plan</button>
    </div>
  );
}
