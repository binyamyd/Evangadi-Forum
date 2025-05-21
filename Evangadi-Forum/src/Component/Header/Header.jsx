import classes from "../Header/Header.module.css";
import Logo from "../../assets/evangadi_Logo.png";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup"); // Programmatic navigation
  };

  return (
    <section className={classes.container}>
      <div className={classes.img_container}>
        <Link to="/">
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
        <div className={classes.button}>
          <button onClick={handleSignupClick}>SIGN IN</button>
        </div>
      </div>
    </section>
  );
}

export default Header;
