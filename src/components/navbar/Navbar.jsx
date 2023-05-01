import "./navbar.scss";

//Navbar
const Navbar = () => {
  const joinedUser = JSON.parse(localStorage.getItem("joinedUser"));

  return (
    <div className="navbar_container">
      <h1>TO DO</h1>
      <div className="navbar_right_side">
        <div>{joinedUser?.FirstName ? joinedUser?.FirstName : "YourName"}</div>
        <img src={joinedUser?.Profile} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
