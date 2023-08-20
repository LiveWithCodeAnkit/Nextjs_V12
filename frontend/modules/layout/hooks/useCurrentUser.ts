import { useCurrentUserQuery } from "generated/graphql";

const useCurrentUser = () => {
  const { data, loading, error } = useCurrentUserQuery();

  return { currentUser: data?.currentUser, loading, error };
};

export default useCurrentUser;
