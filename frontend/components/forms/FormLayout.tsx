import React from "react";
import { Formik, Form, FormikValues, FormikConfig } from "formik";

interface FormProps extends FormikConfig<FormikValues> {
  form?: string;
}

const FormLayout: React.FC<FormProps> = ({ children, form, ...FormProps }) => (
  <Formik {...FormProps}>
    {!!children && typeof children === "function" ? (
      (FormProps) => children(FormProps)
    ) : (
      <Form className={form}>{children}</Form>
    )}
  </Formik>
);
export default FormLayout;
