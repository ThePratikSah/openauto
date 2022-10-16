import { useFormik } from "formik";
import { handlePost, validate } from '../helpers/formValidation';
import styles from "../styles/Home.module.css";

// formik component
export function CustomForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      handlePost(JSON.stringify(values, null, 2), resetForm);
    },
  });
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <input
        placeholder="Enter your name"
        className={styles.input}
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <input
        placeholder="Enter your email"
        className={styles.input}
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <button className={styles.submitText} type="submit">
        Submit
      </button>
    </form>
  );
}