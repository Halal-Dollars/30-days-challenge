import { useState } from "react";
import Input from "./Input";
import styles from "../styles/All.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import Loader from "./Loader";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const SubmitTask = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [agree, setAgree] = useState(false);
  const [uniqueCodeTrials, setUniqueCodeTrials] = useState(0);

  const registerSchema = Yup.object().shape({
    uniqueCode: Yup.string().required("Unique Code is required"),
    upworkOutreach: Yup.number().required("Upwork Outreach is required"),
    socialMediaPosts: Yup.number().required("Social Media Posts is required"),
    socialMediaEngagements: Yup.number().required(
      "Social Media Engagements is required"
    ),
    jobApplications: Yup.number().required("Job Applications is required"),
    localOutreach: Yup.number().required("Local Outreach is required"),
    intlOutreach: Yup.number().required("Int'l Outreach is required"),
    ecommerceDeliveredOrders: Yup.number().required(
      "E-commerce Delivered Orders is required"
    ),
    noOfClients: Yup.number().required("Number Of Clients is required"),
    earningsInDollars: Yup.number().required("Earnings In Dollars is required"),
  });

  const formik = useFormik({
    initialValues: {
      uniqueCode: "",
      upworkOutreach: 0,
      socialMediaPosts: 0,
      socialMediaEngagements: 0,
      socialGroupPost: 0,
      jobApplications: 0,
      localOutreach: 0,
      intlOutreach: 0,
      ecommerceDeliveredOrders: 0,
      noOfClients: 0,
      earningsInDollars: 0,
      earningsInNaira: 0,
      opportunities: 0,
      jobSecured: 0,
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

      fetch("/api/task-submission", {
        method: "POST",
        body: JSON.stringify(values),
      })
        .then(async (res) => {
          const data = await res.json();
          if (res.ok) {
            Swal.fire({
              title: "Success!",
              text: `Task Submission Successful`,
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
        })
        .finally(() => {
          setSubmitting(false);
        });
      return;
    },
  });

  const handleForgetUniqueCode = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    formik.setSubmitting(true);

    fetch("/api/get-unique-code", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          Swal.fire({
            title: "Success!",
            text: `Your unique code is: ${data?.uniqueCode}`,
            icon: "success",
            confirmButtonText: "Ok",
          });
          setUniqueCodeTrials(0);
        } else {
          Swal.fire({
            title: "Error!",
            text:
              data?.error || "Unique code retrieval failed, please try again",
            icon: "error",
            confirmButtonText: "Ok",
          });
          setUniqueCodeTrials(uniqueCodeTrials + 1);
        }
      })
      .finally(() => {
        formik.setSubmitting(false);
      });
  };

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  };

  return (
    <Loader spinning={formik.isSubmitting}>
      <div className={styles.register}>
        <h3 className={styles.register__title}>Daily Tasks Submission</h3>
        <p className={styles.register__desc}>Submit your tasks for today</p>

        <div className={styles.register__form}>
          <Input
            className="max-w-full"
            label="Your unique Code"
            defaultValue={formik.values.uniqueCode}
            name="uniqueCode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Unique Code"
            disabled={formik.isSubmitting}
            error={formik.touched.uniqueCode && formik.errors.uniqueCode}
          />
          <p
            className="text-[13px] text-[#475467] mt-[5px] text-left cursor-pointer"
            onClick={toggleDialog}
          >
            Forgot your unique code?
          </p>
          {uniqueCodeTrials >= 3 && (
            <p className="text-[13px] text-[#475467] mt-[5px] text-left">
              Having issues with your unique code? Contact: +2349000000000
            </p>
          )}
          <Input
            className="max-w-full"
            label="Upwork Outreach (Recommended is 5 or more)"
            defaultValue={formik.values.upworkOutreach}
            name="upworkOutreach"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="How many jobs did you apply for on Upwork today?"
            disabled={formik.isSubmitting}
            error={
              formik.touched.upworkOutreach && formik.errors.upworkOutreach
            }
          />
          <Input
            className="max-w-full"
            label="Social Media Posts (Recommended is 2)"
            defaultValue={formik.values.socialMediaPosts}
            name="socialMediaPosts"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="How many posts did you make across all social media today?"
            disabled={formik.isSubmitting}
            error={
              formik.touched.socialMediaPosts && formik.errors.socialMediaPosts
            }
          />
          <Input
            className="max-w-full"
            label="Social Media Engagement (Recommended is 10)"
            defaultValue={formik.values.socialMediaEngagements}
            name="socialMediaEngagements"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="How many comments and following across all social media did you make today?"
            disabled={formik.isSubmitting}
            error={
              formik.touched.socialMediaEngagements &&
              formik.errors.socialMediaEngagements
            }
          />
          <Input
            className="max-w-full"
            label="Social Group Post (2 groups recommended - 1 post per group)"
            defaultValue={formik.values.socialGroupPost}
            name="socialGroupPost"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="How many comments and following across all social media did you make today?"
            disabled={formik.isSubmitting}
            error={
              formik.touched.socialGroupPost &&
              formik.errors.socialGroupPost
            }
          />
          <Input
            className="max-w-full"
            label="Job Application (Recommended is 5)"
            defaultValue={formik.values.jobApplications}
            name="jobApplications"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="How many jobs did you apply for today?"
            disabled={formik.isSubmitting}
            error={
              formik.touched.jobApplications && formik.errors.jobApplications
            }
          />
          <Input
            className="max-w-full"
            label="Local Outreach (Recommended is 30)"
            defaultValue={formik.values.localOutreach}
            name="localOutreach"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="How many local clients did you reach out to today?"
            disabled={formik.isSubmitting}
            error={formik.touched.localOutreach && formik.errors.localOutreach}
          />
          <Input
            className="max-w-full"
            label="Int’l  Outreach (Recommended is 30)"
            defaultValue={formik.values.intlOutreach}
            name="intlOutreach"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="How many international clients did you reach out to today?"
            disabled={formik.isSubmitting}
            error={formik.touched.intlOutreach && formik.errors.intlOutreach}
          />
          <Input
            className="max-w-full"
            label="Opportunities"
            defaultValue={formik.values.opportunities}
            name="opportunities"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="How many e-commerce deliveries did you make today?"
            disabled={formik.isSubmitting}
            error={formik.touched.opportunities && formik.errors.opportunities}
          />
          <Input
            className="max-w-full"
            label="Job Secured"
            defaultValue={formik.values.jobSecured}
            name="jobSecured"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="How many e-commerce deliveries did you make today?"
            disabled={formik.isSubmitting}
            error={
              formik.touched.jobSecured &&
              formik.errors.jobSecured
            }
          />
          <Input
            className="max-w-full"
            label="Ecommerce Delivered Orders (Recommended is 5)"
            defaultValue={formik.values.ecommerceDeliveredOrders}
            name="ecommerceDeliveredOrders"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="How many e-commerce deliveries did you make today?"
            disabled={formik.isSubmitting}
            error={
              formik.touched.ecommerceDeliveredOrders &&
              formik.errors.ecommerceDeliveredOrders
            }
          />
          <Input
            className="max-w-full"
            label="Number of Clients"
            defaultValue={formik.values.noOfClients}
            name="noOfClients"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="How many new clients did you get today?"
            disabled={formik.isSubmitting}
            error={formik.touched.noOfClients && formik.errors.noOfClients}
          />
          <Input
            className="max-w-full"
            label="Total Earnings in Dollars"
            defaultValue={formik.values.earningsInDollars}
            name="earningsInDollars"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="How much did you earn across all business models today?"
            disabled={formik.isSubmitting}
            error={
              formik.touched.earningsInDollars &&
              formik.errors.earningsInDollars
            }
          />
          <Input
            className="max-w-full"
            label="Total Earnings in Naira"
            defaultValue={formik.values.earningsInNaira}
            name="earningsInNaira"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="How much did you earn across all business models today?"
            disabled={formik.isSubmitting}
            error={
              formik.touched.earningsInNaira && formik.errors.earningsInNaira
            }
          />

          <div className={styles.register__agreement}>
            <input
              defaultChecked={agree}
              type="checkbox"
              onChange={() => setAgree(!agree)}
            />
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
            Submit Task
          </button>
        </div>
      </div>

      <Dialog
        open={dialogOpen}
        onClose={toggleDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const { email, password } = formJson;
            handleForgetUniqueCode({ email, password });
            toggleDialog();
          },
        }}
      >
        <DialogTitle>Retrieve Unique Code</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </Loader>
  );
};

export default SubmitTask;
