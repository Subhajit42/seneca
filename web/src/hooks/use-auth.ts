import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

// This hook can be used to access the user info.
export default function useAuth() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }
  return value;
}
