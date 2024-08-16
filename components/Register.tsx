import React, { useEffect } from "react";
import Input from "./Input";
import styles from "../styles/All.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import Loader from "./Loader";

const Register = () => {
  const [agree, setAgree] = React.useState(false);
  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    professionalEmail: Yup.string().email("Invalid email address"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    password: Yup.string().required("Password is required"),
    linkedInLink: Yup.string().required("LinkedIn Link is required"),
    upworkLink: Yup.string().required("Upwork Link is required"),
    facebookLink: Yup.string().required("Facebook Link is required"),
    twitterLink: Yup.string().required("Twitter Link is required"),
    funnelLink: Yup.string().required("Funnel Link is required"),
    mediumLink: Yup.string().required("Medium Link is required"),
    goHighLevelAccountName: Yup.string().required(
      "GoHighLevel Account Name is required"
    ),
    // phoneNumber: Yup.string().required("Phone Number is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      professionalEmail: "",
      linkedInLink: "",
      upworkLink: "",
      facebookLink: "",
      twitterLink: "",
      funnelLink: "",
      mediumLink: "",
      goHighLevelAccountName: "",
      phoneNumber: "",
      country: "Nigeria",
    },
    validationSchema: registerSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(values);
      if (!agree) {
        Swal.fire({
          title: "Error!",
          text: "Please agree to the terms and conditions",
          icon: "error",
          confirmButtonText: "Ok",
        });
        setSubmitting(false);
        return;
      }

      fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(values),
      }).then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          Swal.fire({
            title: "Success!",
            text: `Registration Successful, Your Unique code is "${data?.uniqueCode}". kindly copy and save it, your unique code will be needed when submitting tasks.`,
            icon: "success",
            confirmButtonText: "Ok",
          });
          resetForm();
        } else {
          Swal.fire({
            title: "Error!",
            text: data?.error || "Registration failed, please try again",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
        setSubmitting(false);
      });
      return;
    },
  });

  return (
    <Loader spinning={formik.isSubmitting}>
      <div className={styles.register}>
        <h3 className={styles.register__title}>Register for the Challenge</h3>
        <p className={styles.register__desc}>
          Fill the form below to participate in the $500 in 30 Days Challenge
        </p>

        <div className={styles.register__form}>
          <div className={styles.row}>
            <Input
              className="max-w-full"
              name="firstName"
              label="First name"
              defaultValue={formik.values.firstName}
              placeholder="First name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              error={formik.touched.firstName && formik.errors.firstName}
            />
            <Input
              className="max-w-full"
              name="lastName"
              label="Last name"
              defaultValue={formik.values.lastName}
              placeholder="Last name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              error={formik.touched.lastName && formik.errors.lastName}
            />
          </div>
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
          <Input
            className="max-w-full"
            name="professionalEmail"
            label="Professional Email"
            defaultValue={formik.values.professionalEmail}
            placeholder="you@company.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            error={formik.touched.professionalEmail && formik.errors.professionalEmail}
          />
          <Input
            className="max-w-full"
            name="linkedInLink"
            label="LinkedIn Profile Link"
            defaultValue={formik.values.linkedInLink}
            placeholder="Insert link here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            error={formik.touched.linkedInLink && formik.errors.linkedInLink}
          />
          <Input
            className="max-w-full"
            name="upworkLink"
            label="Upwork Profile Link"
            defaultValue={formik.values.upworkLink}
            placeholder="Insert link here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            error={formik.touched.upworkLink && formik.errors.upworkLink}
          />
          <Input
            className="max-w-full"
            name="facebookLink"
            label="Facebook Profile Link"
            defaultValue={formik.values.facebookLink}
            placeholder="Insert link here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            error={formik.touched.facebookLink && formik.errors.facebookLink}
          />
          <Input
            className="max-w-full"
            name="twitterLink"
            label="Twitter Profile Link"
            defaultValue={formik.values.twitterLink}
            placeholder="Insert link here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            error={formik.touched.twitterLink && formik.errors.twitterLink}
          />
          <Input
            className="max-w-full"
            name="funnelLink"
            label="Funnel Link"
            defaultValue={formik.values.funnelLink}
            placeholder="Insert link here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            error={formik.touched.funnelLink && formik.errors.funnelLink}
          />
          <Input
            className="max-w-full"
            name="mediumLink"
            label="Medium Profile Link"
            defaultValue={formik.values.mediumLink}
            placeholder="Insert link here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            error={formik.touched.mediumLink && formik.errors.mediumLink}
          />
          <Input
            className="max-w-full"
            name="goHighLevelAccountName"
            label="GoHighLevel Account Name"
            defaultValue={formik.values.goHighLevelAccountName}
            placeholder="GoHighLevel Account Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            error={formik.touched.goHighLevelAccountName && formik.errors.goHighLevelAccountName}
          />

          <div className={styles.register__agreement}>
            <input defaultChecked={agree} type="checkbox" onChange={() => setAgree(!agree)} />
            <span>
              I testify by Allah that all the information provided are true and
              accurate
            </span>
          </div>

          <button
            type="submit"
            onClick={(e) => formik.handleSubmit()}
            className={styles.register__button}
            disabled={formik.isSubmitting}
          >
            Register Now
          </button>
        </div>
      </div>
    </Loader>
  );
};

export default Register;
