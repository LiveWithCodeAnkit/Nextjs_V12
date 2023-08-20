import React from "react";
import { FieldConfig, FormikValues } from "formik";
import CheckBox from "@components/CheckBox";
import FormFieldLayout from "./FormFieldLayout";

interface Props extends FieldConfig<FormikValues> {
  classes?: {
   
    label?: string;
    input?: string;
    error?: string;
  };
  label?: string;
  handleChange?: Function;
  placeholder?: string;
  id?: number;
  checked?: Function;
  value?: any; // add this line
}

const FormFieldCheckBox: React.FC<Props> = ({
  handleChange,
  id,
  checked,
  label,
  value,
  ...props
}) => (
  <FormFieldLayout {...props}>
    {({ field }: Record<string, any>) => (
      <CheckBox
        {...field}
        label={label}
        onChange={(item: FormikValues) => {
          field.onChange(item);
          if (!!handleChange) {
            handleChange(item.target.checked);
          }
        }}
      />
    )}
  </FormFieldLayout>
);

export default FormFieldCheckBox;
