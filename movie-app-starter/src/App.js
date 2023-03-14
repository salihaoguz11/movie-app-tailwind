import React from "react";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContext";

import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
};

export default App;
