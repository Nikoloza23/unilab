import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UserPhoto from "../../assets/add_photo.svg";

import "./signIn.scss";

const SignIn = () => {
  const [enteredName, setEnteredName] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [errors, setError] = useState(false);

  const navigate = useNavigate();

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setUserProfile(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleJoin = () => {
    if (!userProfile || !enteredName) return;
    const enteredValues = {
      FirstName: enteredName,
      Profile: userProfile,
    };

    localStorage.setItem("joinedUser", JSON.stringify(enteredValues));

    navigate("/todo");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enteredName.length == 0 || userProfile.length == 0) {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="registrer_container">
        <div className="registrer_box">
          <h1>Get Started</h1>
          <label htmlFor="fileInput">
            add a photo
            <div className="img_bubble">
              <img src={userProfile || UserPhoto} alt="" />
            </div>
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
            id="fileInput"
          />
          {errors && userProfile.length <= 0 ? (
            <div className="error_messages">გთხოვთ აირჩიოთ ფოტო </div>
          ) : (
            ""
          )}
          <label>fill in you name</label>
          <input
            defaultValue={enteredName}
            onChange={(e) => setEnteredName(e.target.value)}
            type="text"
            placeholder="your name"
          />
          {errors && enteredName.length <= 0 ? (
            <div className="error_messages">გთხოვთ შეავსოთ </div>
          ) : (
            ""
          )}
          <button onClick={handleJoin}>Sign In</button>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
