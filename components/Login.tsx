import React from "react";
import { useRouter } from "next/router";
import Input from "./Input";
import styles from "../styles/All.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import Loader from "./Loader";
import { useUserStore } from "../store/user";

const Login = () => {
  const router = useRouter();

  const setUser = useUserStore((state) => state.setUser);

  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(values),
      })
        .then(async (res) => {
          const data = await res.json();
          if (res.ok) {
            Swal.fire({
              title: "Success!",
              text: "Login Successful",
              icon: "success",
              confirmButtonText: "Ok",
            });
            console.log("data.user", data?.user);
            setUser(data?.user);
            router.push("/dashboard");
            resetForm();
          } else {
            Swal.fire({
              title: "Error!",
              text: data?.error || "Login failed, please try again",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire({
            title: "Error!",
            text: error || "Login failed, please try again",
            icon: "error",
            confirmButtonText: "Ok",
          });
        })
        .finally(() => setSubmitting(false));
      return;
    },
  });

  return (
    <Loader spinning={formik.isSubmitting}>
      <div className={styles.register}>
        <h3 className={styles.register__title}>Login</h3>
        <p className={styles.register__desc}>Welcome back </p>

        <div className={styles.register__form}>
          <Input
            className="max-w-full"
            name="email"
            label="Email"
            defaultValue={formik.values.email}
            placeholder="you@gmail.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            error={formik.touched.email && formik.errors.email}
          />
          <Input
            className="max-w-full"
            name="password"
            label="Password"
            defaultValue={formik.values.password}
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            error={formik.touched.password && formik.errors.password}
          />

          <button
            type="submit"
            onClick={(e) => formik.handleSubmit()}
            className={styles.register__button}
            disabled={formik.isSubmitting}
          >
            Login
          </button>
        </div>
      </div>
    </Loader>
  );
};

export default Login;
