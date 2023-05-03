import { useNavigate } from "react-router";
import "./navbar.scss";

//Navbar
const Navbar = () => {
  const joinedUser = JSON.parse(localStorage.getItem("joinedUser"));

  const navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();

    navigate("/");
  };
  return (
    <div className="navbar_container">
      <h1>TO DO</h1>
      <div className="navbar_right_side">
        <div>{joinedUser?.FirstName ? joinedUser?.FirstName : "YourName"}</div>
        <img src={joinedUser?.Profile} alt="" />
        <div className="sign_out" onClick={signOut}>
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default Navbar;
