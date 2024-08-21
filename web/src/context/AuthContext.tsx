"use client";

import {
  createContext,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";
// import { supabase } from "@/lib/supabase";
// import { AuthError, Session } from "@supabase/supabase-js";
// import { AuthCredentials, signInWithEmail, signOut } from "@/actions/auth";

import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
  UserCredential,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

/**
 * The context for the auth
 */
export const AuthContext = createContext<{
  user: User | null;
  signIn: () => Promise<UserCredential>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}>({
  user: null,
  isLoading: false,
  signIn: async () => ({} as UserCredential),
  signOut: async () => {},
});

/**
 * The user provider
 */
export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  /**
   * The sign-in with google function
   */
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
  };

  /**
   * The sign-out function
   */
  const logout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  /**
   * To check if the state of authentication has changed
   */
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currUser) =>
      setUser(currUser)
    );
    setLoading(false);

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn: googleSignIn,
        signOut: logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
