import { useNavigate } from "react-router-dom";

export default function PlanInput() {
  return (
    <div>
      Plan Input
      <form>
        <label>
          Renewal Date:<input type="date"></input>
        </label>
        <label>
          Category:
        </label>
        <select>
          <option value="dental">Dental</option>
          <option value="massage">Massage</option>
          <option value="physio">Physiotherapy</option>
          <option value="vision">Vision</option>
          <option value="prescription">Prescription</option>
          <option value="health-spending">Health Spending</option>
          <option value="orthotics">Orthotics</option>
          <option value="orthodontics">Orthodontics</option>
          <option value="ambulance">Ambulance</option>
          <option value="clinic-visit">Clinic Visit</option>
          <option value="counselling">Counselling</option>
          <option value="psychologist">Psychologist</option>
          <option value="vaccinations">Vaccinations</option>
          <option value="travel-insurance">Travel Insurance</option>
          <option value="fertility">Fertility</option>
          <option value="disability">Disability</option>
          <option value="other">Other</option>
        </select>
      </form>
    </div>
  );
}
