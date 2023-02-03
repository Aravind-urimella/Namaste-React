import pic from "../../logos/FAy.png";
import { useState } from "react";

const loggedInUser = () => {
  return true;
};

const Title = () => {
  return (
    <a href="/">
      {/* <h1> Foodies Adda </h1> */}
      <img className="logo" src={pic} alt="logo"></img>
    </a>
  );
};

const Header = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          {IsLoggedIn ? (
        <button className="log-button log-out-button"
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button className="log-button"
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
        </ul>
      </div>
     
    </div>
  );
};

export default Header;
