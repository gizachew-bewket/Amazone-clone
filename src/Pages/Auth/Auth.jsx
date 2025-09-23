import { Link, useNavigate, useLocation } from "react-router-dom";
import style from "./Signup.module.css";
import { auth } from "../../Utility/firebase";
import { useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components//DataProvider/DataProvider";
import { ActionType } from "../../Utility/ActionType";
import { ClipLoader } from "react-spinners";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signin: false,
    signup: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  const navstatedata = useLocation();
  console.log(navstatedata);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === "signin") {
      setLoading({ ...loading, signin: true });
      // firebase auth sign in
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);

        dispatch({
          type: ActionType.SET_USER,
          user: result.user,
        });
        setLoading({ ...loading, signin: false });
        navigate(navstatedata?.state?.redirect || "/");
      } catch (error) {
        setError(error.message);
        setLoading({ ...loading, signin: false });
      }
    } else {
      // firebase auth sign up
      setLoading({ ...loading, signup: true });
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        dispatch({
          type: ActionType.SET_USER,
          user: result.user,
        });
        setLoading({ ...loading, signup: false });
        navigate(navstatedata?.state?.redirect || "/");
      } catch (error) {
        setError(error.message);
        setLoading({ ...loading, signup: false });
      }
    }
  };

  return (
    <section className={style.signup}>
      {/* Logo */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>

      {/* Form */}
      <div className={style.form_container}>
        <h1>sign in</h1>
        {navstatedata?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navstatedata?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={style.login_btn}
          >
            {loading.signin ? (
              <ClipLoader size={20} color="white" />
            ) : (
              "Sign In "
            )}
          </button>
          {/* agreement */}
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based
            Ads Notice.
          </p>
          {/* create account button and add an event */}
          <button
            type="submit"
            onClick={authHandler}
            name="create_account"
            className={style.create_account_btn}
          >
            {loading.signup ? (
              <ClipLoader size={20} color="black" />
            ) : (
              " Create your Amazon Account"
            )}
          </button>
          {error && <p className={style.error_msg}>{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Auth;
