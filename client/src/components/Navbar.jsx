import { Link } from "react-router-dom";

// parent component is App

export default function Navbar() {
  return (
    <nav>
      <h1 className="logo">Benefits 🤍 Prompter</h1>
      <ul className="nav-menu">
        <li>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}
