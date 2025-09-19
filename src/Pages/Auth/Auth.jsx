import React from "react";
import { Link } from "react-router-dom";
import style from "./Signup.module.css";
const Auth = () => {
  return (
    <section className={style.signup}>
      {/* Logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>

      {/* Form */}
      <div className={style.form_container}>
        <h1>sign in</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit" className={style.login_btn}>Sign In</button>
          {/* agreement */}
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based
            Ads Notice.
          </p>
          {/* create account button  */}
          <button className={style.create_account_btn}>Create your Amazon Account</button>
        </form>
      </div>
    </section>
  );
};

export default Auth;
