import { Link } from "react-router-dom";

function HeaderLogo() {
  return (
    <div className="top-bar__logo">
      
      <Link to="/" className="top-bar__logo-link">
      <img
          className="logo-img"
          src="https://www.last.fm/static/images/logo_static_mob.0798d7258e3d.png"
        />
      </Link>
    </div>
  );
}

export default HeaderLogo;
