import React from "react";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import MovieContextProvider from "./context/MovieContext";

const App = () => {
  return (
    <AuthContextProvider>
      <MovieContextProvider>
        <AppRouter />
        <ToastContainer />
      </MovieContextProvider>
    </AuthContextProvider>
  );
};

export default App;
