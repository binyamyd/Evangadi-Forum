import classes from "../Header/Header.module.css";
import Logo from "../../assets/evangadi_Logo.png";

function Header() {
  return (
    <section className={classes.container}>
      <div className={classes.img_container}>
        <img src={Logo} alt="" />
      </div>
      <div className={classes.links_container}>
        <a href="">Home</a>
        <a href="">How it works</a>
        <div className={classes.button}>
          <button>SIGN IN</button>
        </div>
      </div>
    </section>
  );
}

export default Header;
