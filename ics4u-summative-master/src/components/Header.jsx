import "./Header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useStoreContext } from "../context/Context";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const { signedIn, setSignedIn, firstName, lastName } = useStoreContext();

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img
            src="/src/imgs/logo.png"
            alt="NetDix Logo"
            className="logo-image"
          />
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <li
              className={`menu-list-item ${
                isActive("/movies") ? "active" : ""
              }`}
              onClick={() => navigate("/movies")}
            >
              Movies
            </li>
          </ul>
        </div>

        {signedIn ? (
          <>
            <div className="welcome-container">
              <p>
                Welcome to NETDIX, {firstName} {lastName}
              </p>
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="search-bar">
          <form aria-label="Search the site">
            <input
              className="search-input"
              type="search"
              placeholder="Search..."
            />
            <button type="submit" aria-label="Search">
              <i className="search-icon fa fa-search"></i>
            </button>
          </form>
        </div>

        {signedIn ? (
          <>
            <div className="sign-in-container">
              <div className="sign-in-button-container">
                <a
                  href="/cart"
                  className="signin-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/cart");
                  }}
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                </a>
              </div>
            </div>
            <div className="sign-in-container">
              <div className="sign-in-button-container">
                <a
                  href="/settings"
                  className="signin-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/settings");
                  }}
                >
                  <i className="fa-solid fa-gear"></i>
                </a>
              </div>
            </div>
            <div className="sign-in-container">
              <div className="sign-in-button-container">
                <a
                  href="/logout"
                  className="signin-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSignedIn(false);
                    navigate("/login");
                  }}
                >
                  Logout
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="sign-in-container">
              <div className="sign-in-button-container">
                <a
                  href="/login"
                  className="signin-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/login");
                  }}
                >
                  Sign In
                </a>
              </div>
            </div>
            <div className="sign-in-container">
              <div className="sign-in-button-container">
                <a
                  href="/register"
                  className="signin-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/register");
                  }}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
