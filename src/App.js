import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { useState } from "react";

function App() {
  const [localUser, setLocalUser] = useState(localStorage.getItem("user"));

  const ProtectedRoute = ({ user, children }) => {
    if (!{user}) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };


  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute user={localUser}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
