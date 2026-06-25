import "./../styles/dashboard.css";
import profileImg from "../assets/profile.png";

import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <div className="navbar glass">

      <h2>
        TASK AUTOMATION SYSTEM
      </h2>

      <div className="profile">

        <img
          src={profileImg}
          alt="Profile"
          className="profile-img"
        />

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>

  );

}

export default Navbar;