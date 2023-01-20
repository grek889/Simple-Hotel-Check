import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { useState } from "react";

function App() {
  const [localUser, setLocalUser] = useState(localStorage.getItem("user"));

  const ProtectedRoute = ({ user, children }) => {
    console.log(user);
    if (!user) {
      return <Navigate to="/" replace />;
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
        <Route path="/" element={<Login setLocalUser={setLocalUser}/>} />
        <Route path='/redirect-page' element={ <Navigate to="/home" replace={true} /> }/>
      </Routes>
    </>
  );
}

export default App;
