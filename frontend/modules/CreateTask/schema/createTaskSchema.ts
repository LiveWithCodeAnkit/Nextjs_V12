import { object, string, number, boolean } from "yup";

const createTaskSchema = object({
  project: string().ensure().required("Please select project"),
  category: string().ensure().required("Please select category"),
  taskDescription: string().ensure().required("Please enter Description"),
  taskDate: string()
    .ensure()
    .required("Please enter date")
    .default(new Date().toISOString().slice(0, 10)),
  taskHours: number().required("Please enter hours").default(8),
  taskMinutes: number().required("Please enter minutes").default(30),
  isOvertime: boolean().default(false),
  overTimeHours: number(),
  overtimeMinutes: number(),
  taskNotes: string().ensure(),
});

export default createTaskSchema;
