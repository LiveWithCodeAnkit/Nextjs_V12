import React from "react";
import { FieldConfig, FieldProps, FormikValues } from "formik";
import { ReactAsyncSelect } from "@components/select";
import FormFieldLayout from "./FormFieldLayout";

interface Props extends FieldConfig<FormikValues> {
  options: Array<Record<string, any>>;
  classes?: {
    label?: string;
    input?: string;
    error?: string;
    container?: string;
  };
  label?: string;
  placeholder?: string;
}

const AsyncSelect: React.FC<Props> = ({ name, options, ...Props }) => (
  <FormFieldLayout name={name} {...Props}>
    {({ field, form }: FieldProps<any>) => (
      <ReactAsyncSelect
        {...field}
        options={options}
        onChange={(item: FormikValues) => {
          form.setFieldValue(name, item);
        }}
      />
    )}
  </FormFieldLayout>
);

export default AsyncSelect;
