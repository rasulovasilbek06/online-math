import React from "react";
import BackBtn from "./BackBtn";
import { Link } from "react-router-dom";

const Sign = () => {
  return (
    <div className="sign-cover">
    <div className="sign-card">
      <BackBtn />
      <h1>Welcome to Online Math</h1>
      <p>Create an account</p>

      <form>
        <span>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            autoFocus
          />
        </span>
        <span>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" placeholder="Mr Jordan" />
        </span>
        <span
          style={{
            marginBottom: "10px",
          }}
        >
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="ac4vfj7ml8bs6kv5" />
        </span>
      </form>

      <div className="privacy">
        <p>
          By clicking the "Sign up" button,you are creating a Online Math
          account,and you agree to Online Math's{" "}
          <span className="terms">Terms of Use</span> and{" "}
          <span className="terms">Privacy Policy.</span>
        </p>
      </div>

      <Link to={"./added"}>
        <div className="sign-btn">Sign Up</div>
      </Link>
    </div>

          <div className="sign-right-card">

          </div>

    </div>
  );
};

export default Sign;
