import { createContext } from "react";
import { Layout_UserFragment } from "generated/graphql";

export const LayoutContext = createContext({
  currentUser: null,
} as { currentUser: Layout_UserFragment | null });
