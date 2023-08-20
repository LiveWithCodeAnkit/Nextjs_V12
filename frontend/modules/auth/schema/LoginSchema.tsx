import { object, string } from "yup";
const schema = object().shape({
  username: string()
    .email("Email Address is not valid")
    .ensure()
    .required("Please enter your email"),
  password: string()
    .ensure()
    .required("Please enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain at least 8 characters, at least one alphabet and at least one number"
    ),
});

export default schema;
