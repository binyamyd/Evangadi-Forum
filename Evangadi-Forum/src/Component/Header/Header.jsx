import classes from "../Header/Header.module.css";
import Logo from "../../assets/evangadi_Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const location = useLocation();

  const handleSignupClick = () => {
    navigate("/signup");
    // Programmatic navigation
  };
  const handleLoginClick = () => {
    navigate("/login");
  };
  const getAuthButton = () => {
    if (location.pathname === "/login") {
      return <button onClick={handleSignupClick}>SIGN UP</button>;
    } else if (location.pathname === "/signup") {
      return <button onClick={handleLoginClick}>LOG IN</button>;
    } else {
      return <button onClick={handleLoginClick}>LOG OUT</button>;
    }
  };

  return (
    <section className={classes.container}>
      <div className={classes.img_container}>
        <Link to={handleLoginClick}>
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className={classes.links_container}>
        <Link className={classes.underline} to="/Home">
          Home
        </Link>
        <Link className={classes.underline} to="/Home">
          How it works
        </Link>
        <div className={classes.button}>{getAuthButton()}</div>
      </div>
    </section>
  );
}

export default Header;
