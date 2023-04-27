import { Link } from "react-router-dom";
import Todo from "../../assets/todo.svg";

import './landing.scss'

const Landing = () => {
  return (
    <div className="landing_container">
      <div className="wrapper">
        <img src={Todo} alt="" />
        <h1 className="landing_title">Keep Track Of Daily Tasks In Life</h1>
        <Link to="/sign">
        <button>Get Started</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Landing;
