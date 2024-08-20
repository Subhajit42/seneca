"use client";

import useAuth from "@/hooks/use-auth";
import { Button, ButtonProps } from "../ui/button";

export const AuthButton = (props: ButtonProps) => {
  const { user, signIn, signOut } = useAuth();

  const handleAction = async () => {
    try {
      return user ? await signOut() : await signIn();
    } catch (error) {
      console.error(
        `error while performing action: ${user ? "sign-out" : "sign-in"}`,
        { error }
      );
    } finally {
      return null;
    }
  };

  return (
    <Button {...props} onClick={handleAction}>
      {user ? `Sign Out — ${user.email}` : "Sign In"}
    </Button>
  );
};
