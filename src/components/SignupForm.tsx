import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "config/firebase-config";
import { toast } from "react-toastify";
import GoogleButton from "react-google-button";

export const SignupForm = () => {
  const [form, setForm] = useState({ email: "", password: "", firstName: "", lastName: "" });
  const [checkFormValidity, setFormValid] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const location: any = useLocation();
  const from = location?.state?.fromVal?.pathname || "/";
  const provider = new GoogleAuthProvider();

  const validateForm = async (e: any) => {
    e.preventDefault();
    setFormValid(true);
    if (formRef?.current?.checkValidity()) {
      try {
        const result = await createUserWithEmailAndPassword(auth, form.email, form.password);
        toast.success(`Welcome ${result.user.email}!`);
        localStorage.setItem("token", JSON.stringify(result.user.uid));
        navigate(from);
      } catch (e) {
        toast.error(`${e}!`);
      }
    }
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success(`Welcome ${result.user.email}!`);
        localStorage.setItem("token", JSON.stringify(result.user.uid));
        navigate(from);
      })
      .catch((e) => toast.error(`${e}!`));
  };

  return (
    <>
      <form
        className={`card form-card left-text row-flex text-wrap box-shd w-40rm p-h-1 p-v-2 m-2 ${
          checkFormValidity ? "form-validated" : ""
        }`}
        noValidate
        ref={formRef}
        onSubmit={(e) => validateForm(e)}
      >
        <div className="field col-flex w-95p">
          <label className="m-v-1" htmlFor="fname">
            FIRST NAME<span className="mandatory-field">*</span>
          </label>
          <input
            type="text"
            className="input p-07"
            id="fname"
            required
            onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
          />
          <small className="form-validation-msg success-msg green-text">
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
          </small>
          <small className="form-validation-msg error-msg red-text">
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid input
          </small>
        </div>
        <div className="field col-flex w-95p">
          <label className="m-v-1" htmlFor="lname">
            LAST NAME<span className="mandatory-field">*</span>
          </label>
          <input
            type="text"
            className="input p-07"
            id="lname"
            required
            onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
          />
          <small className="form-validation-msg success-msg green-text">
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
          </small>
          <small className="form-validation-msg error-msg red-text">
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid input
          </small>
        </div>
        <div className="field col-flex w-95p">
          <label className="m-v-1" htmlFor="email">
            EMAIL<span className="mandatory-field">*</span>
          </label>
          <input
            type="email"
            className="input p-07"
            id="email"
            required
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
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
            required
            onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
          />
          <span className="eye-icon cursor p-h-1" onClick={() => setPasswordVisible((prev) => !prev)}>
            <i className={`fa fa-eye${!isPasswordVisible ? "-slash" : ""}`} aria-hidden="true"></i>
          </span>
          <small className="form-validation-msg success-msg green-text">
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
          </small>
          <small className="form-validation-msg error-msg red-text">
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid input
          </small>
        </div>
        <button type="submit" className="btn primary-btn w-95p m-1">
          <span>SIGN UP</span>
        </button>
        <span>OR</span>
        <GoogleButton onClick={signInWithGoogle} />
      </form>
      <p className="m-b-2">
        Already a member?{" "}
        <Link to="/login" className="cursor colored-text">
          Login here
        </Link>
      </p>
    </>
  );
};
