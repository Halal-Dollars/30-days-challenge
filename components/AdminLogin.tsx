"use client";
import React, { useMemo, useState } from "react";
import Input from "../components/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import { useRouter } from "next/router";
import { useUserStore } from "../store/user";

export default function Home() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const [initialized, setInitialized] = useState(false);

  useMemo(() => {
    if (user && user.userType === "admin" && !initialized) {
      Swal.fire({
        title: "Error!",
        text: "You are already logged in",
        icon: "error",
        confirmButtonText: "Ok",
      }).finally(() => router.push("/admin"));
    }
  }, [user, initialized]);

  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        body: JSON.stringify({
          email: values.email?.toLowerCase(),
          password: values.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (!res.ok) {
        Swal.fire({
          title: "Error!",
          text:
            data?.error ||
            "An error occurred while processing your request, please try again",
          icon: "error",
          confirmButtonText: "Ok",
        });
        return;
      } else {
        Swal.fire({
          title: "Success!",
          text: "Login Successful",
          icon: "success",
          confirmButtonText: "Ok",
        }).finally(() => {
          setInitialized(true);
          setUser({ ...data?.user, userType: "admin" });
          router.push("/admin");
        });
      }
      return;
    },
  });

  return (
    <div className="flex flex-col bg-[#f2f4f7] p-10 min-h-[calc(100vh-400px)]">
      <Loader spinning={formik.isSubmitting}>
        <div className="w-full flex flex-col max-w-[400px] mx-auto items-center text-center">
          <h3 className="text-[#001f5c] text-3xl font-bold mb-2">Login</h3>
          <p className="text-[#475467] text-lg font-semibold mb-5">
            Welcome back Admin
          </p>

          <div className="w-full">
            <Input
              className="max-w-full"
              label="Email address"
              defaultValue={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="h@gmail.com"
              disabled={formik.isSubmitting}
              error={formik.touched.email && formik.errors.email}
            />
            <Input
              className="max-w-full"
              label="Password"
              defaultValue={formik.values.password}
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="********"
              disabled={formik.isSubmitting}
              error={formik.touched.password && formik.errors.password}
              type="password"
            />
            <button
              type="submit"
              onClick={(e) => formik.handleSubmit()}
              className="bg-[#003db8d7] text-[#f9f5ff] p-[10px_20px] border-none rounded-[5px] mt-[20px] cursor-pointer transition-all duration-300 hover:bg-[#0237a1]"
              disabled={formik.isSubmitting}
            >
              Login
            </button>
          </div>
        </div>
      </Loader>
    </div>
  );
}
