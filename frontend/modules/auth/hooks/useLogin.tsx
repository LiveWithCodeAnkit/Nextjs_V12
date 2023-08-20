import { setCookie } from "nookies";
import { useRouter } from "next/router";
import { FormikValues } from "formik";
import { useLoginMutation } from "generated/graphql";
import { schema } from "../schema";
import client from "lib/apollo";

const useLogin = () => {
  const router = useRouter();
  const [login, { data, error, loading }] = useLoginMutation({
    onCompleted: (data) => {
      setCookie(null, "token", `${data?.login?.token}`);
      router.push(`/dashboard`);
      client.resetStore();
    },
    onError() {},
  });

  const initialValues = schema.cast({}, { assert: false, stripUnknown: true });
  const onSubmit = (input: FormikValues) => {
    const sanitizedInput = schema.cast(input, {
      assert: false,
      stripUnknown: true,
    });
    login({
      variables: {
        input: sanitizedInput,
      },
    });
  };

  return { initialValues, onSubmit, schema, error, loading };
};

export default useLogin;
