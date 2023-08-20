import React from "react";
import { FieldConfig, FieldProps, FormikValues } from "formik";
import { TextArea } from "@components/textArea";
import FormFieldLayout from "./FormFieldLayout";
interface Props extends FieldConfig<FormikValues> {
  classes?: {
    label?: string;
    input?: string;
    error?: string;
    container?: string;
  };
  label?: string;
  placeholder?: string;
  rows?: number;
}

const FormFieldTextArea: React.FC<Props> = ({
  classes,
  rows,
  placeholder,
  ...Props
}) => (
  <FormFieldLayout {...Props}>
    {({ field }: FieldProps<any>) => (
      <TextArea
        rows={rows}
        placeholder={placeholder}
        className={`bg-white border p-2 text-neutral-800 ${classes?.input}`}
        {...field}
      />
    )}
  </FormFieldLayout>
);

export default FormFieldTextArea;
