import "./navbar.scss";

const Navbar = () => {
  const JoinedUser = JSON.parse(localStorage.getItem("joinedUser"));
  return (
    <div className="navbar_container">
      <h1>TO DO</h1>
      <div className="navbar_right_side">
        <div>{JoinedUser?.FirstName ? JoinedUser?.FirstName : "YourName"}</div>
        <img src={JoinedUser?.Profile} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
