import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoginPages } from "./pages/LoginPages";
import { HomePages } from "./pages/HomePages";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { MainPageLayout } from "./layout/MainPageLayout";
import { NotFounPages } from "./pages/NotFounPages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPages />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<MainPageLayout />}>
            <Route index element={<HomePages />} />
            <Route path="*" element={<NotFounPages />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
