import { useNavigate, Link } from "react-router-dom";
import { useStoreContext } from "../context/Context";
import { useState } from "react";
import "./LoginView.css";

function LoginView() {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");

  const { email, pass, setSignedIn } = useStoreContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailInput === email && passInput === pass) {
      navigate("/movies");
      setSignedIn(true);
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div>
      <nav className="logo-nav">
        <Link to="/">
          <img src="../src/imgs/logo.png" alt="Logo" />
        </Link>
      </nav>
      <div className="sign-in-page">
        <div className="sign-in">
          <h2>SIGN IN</h2>
          <form onSubmit={handleSubmit}>
            <div className="info">
              <input
                type="email"
                name="email"
                onChange={(event) => setEmailInput(event.target.value)}
                required
                value={emailInput}
              />
              <label>Email</label>
            </div>
            <div className="info">
              <input
                type="password"
                name="password"
                onChange={(event) => setPassInput(event.target.value)}
                required
                value={passInput}
              />
              <label>Password</label>
            </div>
            <button className="sign-in-btn" type="submit">
              Sign In
            </button>
          </form>
          <p>
            New to NETDIX? <Link to="/register">Sign up now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
