import "../Styles/SignUp.css";
import { Link } from "react-router-dom";


let SignUp = () => {
    return (
        <div className="Sign-UP">
        <div className="Sign-Up-Container">
            <div className="Sign-Up-Header">
                <div className="signlogo"></div>
                <h2>Create an account</h2>
                <p>Let's begin the journey.</p>

                <form action="">
                    <input type="text" name="Name" id="Name" placeholder="Name" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <input type="password" name="password" id="password" placeholder="Confirm Password" />

                    <button type="submit">Create account</button>
                </form>
                <p className="account-exist">Already have an account? <Link to='/signin'><b>Sign in</b></Link></p>

            </div>
         
        </div>
      </div>
    )
}

export default SignUp;