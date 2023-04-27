import { Link } from "react-router-dom";

import UserPhoto from "../../assets/add_photo.svg";

import "./signIn.scss";

const SignIn = () => {
  return (
    <div className="registrer_container">
      <div className="registrer_box">
        <h1>Get Started</h1>
        <label htmlFor="fileInput">add a photo</label>
        <div className="img_bubble">
          <img src={UserPhoto} alt="" />
        </div>
        <label>fill in you name</label>
        <input type="text" placeholder="your name" />
        <Link to="/todo">
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
