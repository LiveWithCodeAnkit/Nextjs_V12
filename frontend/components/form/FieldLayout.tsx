import React from "react";
import { Field, FieldConfig, FieldProps, FormikValues } from "formik";

import { Input } from "../input";
interface Props extends FieldConfig<FormikValues> {
  classes?: {
    label?: string;
    input?: string;
    error?: string;
  };
  label?: string;
}
const FieldLayout: React.FC<Props> = ({
  classes,
  children,
  label,
  name,
  type,
}) => {
  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps<any>) => {
        return (
          <>
            <label className={`lbl mt-4 mb-1 ${classes?.label}`}>{label}</label>
            {!!children && typeof children === "function" ? (
              children({ field, form, meta })
            ) : (
              <Input type={type} className={`${classes?.input}`} {...field} />
            )}
            {meta.error && meta.touched && (
              <div className={`text-red-600 ${classes?.error}`}>
                {meta.error}
              </div>
            )}
          </>
        );
      }}
    </Field>
  );
};
export default FieldLayout;
