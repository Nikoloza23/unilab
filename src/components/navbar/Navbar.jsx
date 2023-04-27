import userProfile from "../../assets/add_photo.svg";

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <h1>TO DO</h1>
      <div className="navbar_right_side">
        <div>YourName</div>
        <img src={userProfile} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
