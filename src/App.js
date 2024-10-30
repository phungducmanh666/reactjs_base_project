import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AdminPage from "./pages/adminPage/AdminPage";
import LoginPage from "./pages/login/LoginPage";
import AuthorizationHOC from "./hoc/authorization/AuthorizationHOC";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <AuthorizationHOC
              page={<AdminPage />}
              redirect={"/login"}
              hasRole={"admin"}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
