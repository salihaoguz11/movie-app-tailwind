import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const createUser = async (email, password) => {
    try {
      let userCredantial = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      console.log(userCredantial);
    } catch (error) {
      console.log(error);
    }
  };
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const logOut = () => {
    signOut(auth);
  };
  const values = {
    createUser,
    logOut,
    signIn,
    currentUser: { displayName: "Saliha" },
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
