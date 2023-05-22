import "../Styles/SignIN.css";
import { Link } from "react-router-dom";

let SignIN = () => {
  return (
    <div className="Sign-In">
      <div className="Sign-In-Container">
        <div className="Sign-In-Header">
          <h1>
            Welcome to <span>Digifitness.</span>
            <br />
            Sign In to Continue
          </h1>

          <div className="Sign-In-Form">
            <p>
              Don't have an account?{" "}
              <Link to='/signup'>
                <b>Create a account</b>
              </Link>
              <br />
              It takes less than a minute.
            </p>

            <form>
              <label htmlFor="email">Email:</label>
              <input type="text" placeholder="Email" name="email" />
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="Password" name="password" />
              <p>Forget Password ?</p>
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIN;
