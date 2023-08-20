import { FormikValues } from "formik";
import { createTaskSchema } from "../schema";

const useCreateTask = () => {
  const initialValues = createTaskSchema.cast(
    {},
    { assert: false, stripUnknown: false }
  );
  
  const onSubmit = (values: FormikValues) => {
    const result = localStorage.getItem("userTask");
    const task = !!result ? JSON.parse(result) : [];
    localStorage.setItem("userTask", JSON.stringify([...task, values]));
  };
  return { onSubmit, createTaskSchema, initialValues };
};

export default useCreateTask;
