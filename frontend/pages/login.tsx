import { Layout } from "@modules/layout";
import { AuthRestrict } from "@modules/layout/Layout";
import { Login } from "@modules/auth";

const LoginPage = () => {
  return (
    <Layout forbiddenWhen={AuthRestrict.LOGGED_IN}>
      <Login />
    </Layout>
  );
};

export default LoginPage;
