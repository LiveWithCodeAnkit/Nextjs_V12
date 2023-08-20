import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { parseCookies } from "nookies";

const loginApi = process.env.NEXT_PUBLIC_API_URL;
const mainLink = new HttpLink({
  uri: loginApi,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const cookies = parseCookies();
  operation.setContext({
    headers: {
      authorization: cookies.token ? `Bearer ${cookies.token}` : "",
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: ApolloLink.from([authMiddleware, mainLink]),
  cache: new InMemoryCache(),
});

export default client;
