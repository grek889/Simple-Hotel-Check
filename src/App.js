import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { useState } from "react";

function App() {
  const [localUser, setLocalUser] = useState(localStorage.getItem("user"));

  const useAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const ProtectedRoute = ({ children }) => {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Login />} />
        {/* <Route path='/redirect-page' element={ <Navigate to="/home" replace={true} /> }/> */}
      </Routes>
    </>
  );
}

export default App;
