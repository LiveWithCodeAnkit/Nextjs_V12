import { destroyCookie } from "nookies";
import { useRouter } from "next/router";
import { useLogoutMutation } from "generated/graphql";
import client from "lib/apollo";

const useLogout = () => {
  const router = useRouter();
  const [logout, { error, loading }] = useLogoutMutation({
    onCompleted: () => {
      destroyCookie(null, "token");
      client.resetStore();
      router.push("/login");
    },
  });

  const onClick = () => {
    logout();
  };
  return { onClick, error, loading };
};

export default useLogout;
