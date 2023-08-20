import React from "react";
import { FormikProps, FormikValues } from "formik";
import Button from "@components/Button";
import {
  projectData,
  CategoryData,
  hourData,
  minuteData,
} from "@constants/createTask";
import {
  FormLayout,
  FormFieldLayout,
  FormFieldTextArea,
  AsyncSelect,
  FormFieldCheckBox,
  FormFieldSelect,
} from "@components/forms";
import { useCreateTask } from "./hooks";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  close?: React.MouseEventHandler<HTMLButtonElement>;
}

const classes = {
  container: "basis-1/2",
};

const CreateTaskForm: React.FC<Props> = ({ close, ...props }) => {
  const { onSubmit, createTaskSchema, initialValues } = useCreateTask();

  const handleChange = (value: boolean, props: FormikProps<FormikValues>) => {
    if (value) {
      props.setFieldValue("overtimeHours", 1);
      props.setFieldValue("overtimeMinutes", 0);
    } else {
      props.setFieldValue("overtimeHours", 0);
      props.setFieldValue("overtimeMinutes", 0);
    }
  };

  return (
    <FormLayout
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={createTaskSchema}
      form={"flex flex-col gap-4"}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <div className="flex flex-col gap-[15px] p-4 w-full text-[0.9375rem]">
            <div className="flex flex-row gap-[30px] w-full max-md:flex-col">
              <AsyncSelect
                name="project"
                options={projectData}
                label="Select Project *"
                classes={classes}
              />
              <AsyncSelect
                name="category"
                options={CategoryData}
                label="Category *"
                classes={classes}
              />
            </div>
            <div className="flex flex-row justify-start items-center gap-[30px] max-md:flex-col max-md:items-start">
              <FormFieldSelect
                name="taskHours"
                option={hourData}
                label="Hours *"
              />
              <FormFieldSelect
                option={minuteData}
                label="Minutes *"
                name="taskMinutes"
              />
              <FormFieldLayout
                name="taskDate"
                type="date"
                label="Task Date *"
                classes={classes}
              />
            </div>
            <FormFieldTextArea
              name="taskDescription"
              rows={3}
              placeholder="Description"
              label="Task Description *"
              classes={classes}
            />
            <FormFieldCheckBox
              label="Check This to Add in OverTime."
              name="isOvertime"
              handleChange={(value: boolean) => handleChange(value, props)}
            />
            {props.values.isOvertime && (
              <div className="flex flex-col text-gray-600 ">
                <p className="py-[15px]">
                  Please Tell Us How Much OverTime From Above [Must Be Less Than
                  Above Timing].
                </p>
                <div className="flex gap-8">
                  <FormFieldSelect
                    option={hourData}
                    label="Hours *"
                    name="overtimeHours"
                  />
                  <FormFieldSelect
                    option={minuteData}
                    label="Minutes *"
                    name="overtimeMinutes"
                  />
                </div>
              </div>
            )}

            <FormFieldLayout
              name="taskNotes"
              type="text"
              label="Notes (optional)"
              placeholder="Any Project Task Notes (optional)"
            />
          </div>
          <div className="flex justify-end gap-2 p-3 rounded-b-2xl w-full">
            <Button
              className="modal-button text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600"
              type="button"
              onClick={close}
              {...props}
            >
              Close
            </Button>
            <Button
              className="modal-button bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 "
              type="submit"
              {...props}
            >
              Save
            </Button>
          </div>
        </form>
      )}
    </FormLayout>
  );
};

export default CreateTaskForm;
