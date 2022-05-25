export default function Register() {
  return (
    <div>
      Register
      <form>
        <label>
          Name: <input type="text" name="name" />
        </label>
        <label>
          Email: <input type="text" name="email" />
        </label>
        <label>
          D.O.B: <input type="text" name="dob" />
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
