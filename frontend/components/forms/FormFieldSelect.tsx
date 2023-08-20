import React from "react";
import { FieldConfig, FieldProps, FormikValues } from "formik";
import { Select } from "@components/select";
import FormFieldLayout from "./FormFieldLayout";

interface Props extends FieldConfig<FormikValues> {
  option: string[] | number[];
  classes?: {
    label?: string;
    input?: string;
    error?: string;
    container?: string;
  };
  label?: string;
  placeholder?: string;
}

const FormFieldSelect: React.FC<Props> = ({ classes, name, ...Props }) => (
  <FormFieldLayout name={name} {...Props}>
    {({ field, form }: FieldProps<any>) => (
      <Select
        className={`bg-white border p-2 text-neutral-800 ${classes?.input}`}
        {...field}
        {...Props}
        onChange={(item: FormikValues) => {
          form.setFieldValue(name, item);
        }}
      />
    )}
  </FormFieldLayout>
);

export default FormFieldSelect;
