import React, { useReducer } from "react";
import _ from "lodash";
import { permissions } from "@constants/permissions/Permission";
import Button from "@components/Button";
import {
  FormLayout,
  FormFieldLayout,
  FormFieldCheckBox,
} from "@components/forms";
import { useCreateTask } from "@modules/CreateTask/hooks";

interface Permission {
  id: number;
  name: string;
  label: string;
  code: string;
  description: string;
}

interface GroupedPermissions {
  prefix: string;
  children: Permission[];
}

interface State {
  [key: string]: boolean;
}

const RoleForm = () => {
  const { onSubmit, createTaskSchema, initialValues } = useCreateTask();

  const groupedPermissions: GroupedPermissions[] = _(permissions)
  .groupBy((p) => p.code.split(".")[0])
  .map((children, prefix) => ({ prefix, children }))
  .value();

const initialState: State = _(groupedPermissions)
  .flatMap("children")
  .map((permission) => [permission.id, false])
  .fromPairs()
  .value();

const [state, dispatch] = useReducer(
  (state: State, action: { type: string; payload: any }) => {
    switch (action.type) {
      case "toggle":
        return { ...state, [action.payload]: !state[action.payload] };
      case "toggleAll":
        const newState = { ...state };
        groupedPermissions.forEach(({ prefix, children }) => {
          if (prefix === action.payload) {
            const allChildrenSelected = children.every(
              (child) => newState[child.id]
            );
            children.forEach((child) => {
              newState[child.id] = !allChildrenSelected;
            });
          }
        });
        return newState;
      default:
        return state;
    }
  },
  initialState
);

const handlePermissionChange = (id: number) => {
dispatch({ type: "toggle", payload: id });
};


const handlePrefixChange = (prefix: string) => {
  dispatch({ type: "toggleAll", payload: prefix });
};

const checkedPermissions = _(state)
.pickBy(Boolean)
.keys()
.value();
console.log("Checked permissions:", checkedPermissions);

  return (
    <FormLayout
    initialValues={initialState}
    onSubmit={onSubmit}
    validationSchema={createTaskSchema}
    form={"flex flex-col gap-4"}
  >
    {(props) => (
      <form className="w-full" onSubmit={props.handleSubmit}>
      <div className="flex flex-col items-center md:flex-col md:space-x-4">
        <div className="w-full md:w-1/2">
          <FormFieldLayout
            name="create Role"
            placeholder="Enter Role"
            label="Enter Role"
          />
          <br />
        </div>
        <div className="w-full md:w-1/2">
        {groupedPermissions.map(({ prefix, children }) => (
       <div key={prefix}>
          <FormFieldCheckBox
            label={prefix}
            name={prefix}
            checked={children.every((child) => state[child.code])}
            handleChange={() => handlePrefixChange (prefix)}
          />
          <div className="pl-6 md:pl-6">
          {children.map(({ id, name, code }) => {
            const isChecked = state[id];
            return (
              <div key={id}>
                <FormFieldCheckBox
                  label={name}
                  id={code}
                  name={code}
                  checked={isChecked}
                  value={id}
                  handleChange={() => handlePermissionChange(id)}
                />
               </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="flex justify-center">
          <Button type="submit" {...props}>
            create
          </Button>
        </div>
      </form>
      )}
    </FormLayout>
  );
};
export default RoleForm;
