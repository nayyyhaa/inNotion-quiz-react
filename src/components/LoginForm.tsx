import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "config/firebase-config";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [checkFormValidity, setFormValid] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const location: any = useLocation();
  const from = location?.state?.fromVal?.pathname || "/";

  const validateForm = async (e: any) => {
    e.preventDefault();
    setFormValid(true);
    if (formRef?.current?.checkValidity()) {
      try {
        const result = await signInWithEmailAndPassword(auth, form.email, form.password);
        localStorage.setItem("token", JSON.stringify(result.user.uid));
        toast.success(`Welcome ${result.user.email}!`);
        navigate(from);
      } catch (e) {
        toast.error(`${e}!`);
      }
    }
  };

  return (
    <>
      <div className="login-card w-40rm col-flex">
        <form
          noValidate
          ref={formRef}
          className={`card form-card left-text row-flex text-wrap box-shd w-40rm p-h-1 p-v-2 m-2 ${
            checkFormValidity ? "form-validated" : ""
          }`}
          onSubmit={(e) => validateForm(e)}
        >
          <div className="field col-flex w-95p">
            <label className="m-v-1" htmlFor="email">
              EMAIL<span className="mandatory-field">*</span>
            </label>
            <input
              type="email"
              className="input p-07"
              id="email"
              value={form.email}
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              required
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
            <small className="form-validation-msg success-msg green-text">
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
            </small>
            <small className="form-validation-msg error-msg red-text">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid email
            </small>
          </div>
          <div className="field col-flex w-95p">
            <label className="m-v-1" htmlFor="upassword">
              PASSWORD<span className="mandatory-field">*</span>
            </label>
            <input
              type={isPasswordVisible ? `text` : `password`}
              className="input p-07"
              id="upassword"
              value={form.password}
              pattern="^.{6,}$"
              required
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            <span className="eye-icon cursor p-h-1" onClick={() => setPasswordVisible((prev) => !prev)}>
              <i className={`fa fa-eye${!isPasswordVisible ? "-slash" : ""}`} aria-hidden="true"></i>
            </span>
            <small className="form-validation-msg success-msg green-text">
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
            </small>
            <small className="form-validation-msg error-msg red-text">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter password with length 6 or more
            </small>
          </div>
          <div className="field full-wd m-1">
            <input className="checkbox-input m-r-1" type="checkbox" id="terms" />
            <label className="m-v-1" htmlFor="terms">
              Keep me signed in
            </label>
          </div>
          <button
            type="submit"
            className="btn primary-outline-btn w-95p m-1"
            onClick={(e) => {
              setForm({ email: "neha@gmail.com", password: "test987!" });
            }}
          >
            <span>LOGIN (with Guest Credentials)</span>
          </button>
          <button type="submit" className="btn primary-btn w-95p m-1">
            <span>LOGIN</span>
          </button>
        </form>
        <div className="login-actions row-flex m-b-2 full-wd">
          <p className="cursor">Forgot password?</p>
          <p>
            <Link to="/signup" className="cursor colored-text">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
