import React from "react";
import { Field, FieldConfig, FieldProps, FormikValues } from "formik";
import { Input } from "@components/input";

interface Props extends FieldConfig<FormikValues> {
  classes?: {
    label?: string;
    input?: string;
    error?: string;
    container?: string;
  };
  defaultValue?: string | number;
  label?: string;
  placeholder?: string;
}

const FormFieldLayout: React.FC<Props> = ({
  classes,
  children,
  label,
  name,
  type,
  placeholder,
}) => (
  <Field name={name}>
    {({ field, form, meta }: FieldProps<any>) => (
      <div className={`flex flex-col ${classes?.container}`}>
        <label className={`text-gray-600 ${classes?.label}`}>{label}</label>
        {!!children && typeof children === "function" ? (
          children({ form, field, meta })
        ) : (
          <Input
            type={type}
            placeholder={placeholder}
            className={`${classes?.input}`}
            {...field}
          />
        )}
        {meta.error && meta.touched && (
          <div className={`text-red-600 ${classes?.error}`}>{meta.error}</div>
        )}
      </div>
    )}
  </Field>
);

export default FormFieldLayout;
