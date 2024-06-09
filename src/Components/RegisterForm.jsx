import { useState } from "react";
import { useNavigate } from "react-router-dom";
import coverImage from "../assests/page1_bg.png"
import styles from "./Register.module.css"
export default function RegisterForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    registerbox: false,
  });
  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    registerbox: null,
  });
  const navigate = useNavigate();
  const handleSubmit = () => {
    let isError = false;
    if (formValues.name.trim().length === 0) {
      setErrors((prev) => {
        return { ...prev, name: "Name is required" };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return { ...prev, name: null };
      });
    }
    if (formValues.username.trim().length === 0) {
      setErrors((prev) => {
        return { ...prev, username: "Username is required" };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return { ...prev, username: null };
      });
    }
    if (formValues.email.trim().length === 0) {
      setErrors((prev) => {
        return { ...prev, email: "Email is required" };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return { ...prev, email: null };
      });
    }
    if (formValues.mobile.trim().length === 0) {
      setErrors((prev) => {
        return { ...prev, mobile: "Mobile is required" };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return { ...prev, mobile: null };
      });
    }
    if (formValues.registerbox === false) {
      setErrors((prev) => {
        return { ...prev, registerbox: "please Check the box" };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return { ...prev, registerbox: null };
      });
    }

    if (isError) {
      return;
    } else {
      window.localStorage.setItem("userInfo", JSON.stringify(formValues));
      navigate("/info");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={coverImage} alt="cover" className={styles.image} />
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>FilmFaves</h1>
        <h2 className={styles.subtitle}>Create your new account</h2>

        <input
          className={styles.input}
          value={formValues.name}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          placeholder="Name"
        />
        <p style={{ color: errors.name ? "red" : "inherit" }}>{errors.name}</p>

        <input
          className={styles.input}
          value={formValues.username}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, username: e.target.value }))
          }
          type="text"
          placeholder="Username"
        />
        <p style={{ color: errors.username ? "red" : "inherit" }}>
          {errors.username}
        </p>

        <input
          className={styles.input}
          value={formValues.email}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, email: e.target.value }))
          }
          type="text"
          placeholder="Email"
        />
        <p style={{ color: errors.email ? "red" : "inherit" }}>
          {errors.email}
        </p>

        <input
          className={styles.input}
          value={formValues.mobile}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, mobile: e.target.value }))
          }
          type="text"
          placeholder="Mobile"
        />
        <p style={{ color: errors.mobile ? "red" : "inherit" }}>
          {errors.mobile}
        </p>

        <label htmlFor="registerbox" className={styles.checkboxLabel}>
          <input
            
            checked={formValues.registerbox}
            id="registerbox"
            type="checkbox"
            name="registerbox"
            onChange={(e) =>
              setFormValues((prev) => ({
                ...prev,
                registerbox: e.target.checked,
              }))
            }
          />
          Share my registration data with Superapp
        </label>
        <p style={{ color: errors.registerbox ? "red" : "inherit" }}>
          {errors.registerbox}
        </p>

        <button
          onClick={handleSubmit}
          className={styles.submitButton}
          type="button"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}