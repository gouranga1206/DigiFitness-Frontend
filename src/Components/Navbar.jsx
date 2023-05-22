import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="Nav_Menu">
        <ul id="menus">
          <li>
           <Link to='/'><a>Home</a></Link>
          </li>
          <li>
           <Link to='/course'><a>Courses</a></Link> 
          </li>
          <li>
            <a href="#home">Other Services</a>
          </li>
          <li>
            <a href="#home">Certified Trainers</a>
          </li>
          <li>
            <a href="#home">About Us</a>
          </li>
          <li>
            <a href="#home">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
