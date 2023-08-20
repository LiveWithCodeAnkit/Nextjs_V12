import React from "react";
import Link from "next/link";
import Button from "@components/Button";
import { FormLayout, FormFieldLayout } from "@components/forms";
import { useLogin } from "./hooks";
import { CardBox } from "@components/cardbox";

const LoginForm = () => {
  const { schema, initialValues, onSubmit, error, loading } = useLogin();

  return (
    <CardBox className="max-w-2xl mx-auto shadow-2xl">
    <FormLayout
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      form={
        "flex flex-col justify-center mx-auto w-full max-w-sm text-sm px-4 text-black"
      }
    >
      <FormFieldLayout name="username" type="email" label="Email Address" />
      <FormFieldLayout name="password" type="password" label="Password" />
      <div className="flex items-center justify-between mt-6 ">
        <Link href="" className="underline text-slate-600">
          Forgot Password?
        </Link>
        <Button type="submit">{loading ? "Loading..." : "Log In"}</Button>
      </div>
    </FormLayout>
  </CardBox>
  );
};

export default LoginForm;
