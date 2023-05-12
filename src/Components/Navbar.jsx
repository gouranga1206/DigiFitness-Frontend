import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="Nav_Menu">
        <ul id="menus">
          <li>
            <a href="#home">Home</a>
            <div className="arrow"></div>
          </li>
          <li>
            <a href="#home">Courses</a>
            <div className="arrow"></div>
          </li>
          <li>
            <a href="#home">Other Services</a>
            <div className="arrow"></div>
          </li>
          <li>
            <a href="#home">Certified Trainers</a>
            <div className="arrow"></div>
          </li>
          <li>
            <a href="#home">About Us</a>
            <div className="arrow"></div>
          </li>
          <li>
            <a href="#home">Blog</a>
            <div className="arrow"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
