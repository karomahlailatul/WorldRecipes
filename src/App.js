import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import "./App.css";

//pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import DetailResep from "./pages/AddRecipes";
import AddRecipe from "./pages/DetailRecipes";

//component
import Footer from "./component/footer";
import Navbar from "./component/navbar";

//modules
// import { ToastContainer } from "react-toastify";

function App() {
  let location = useLocation();
  return (
    <>
      {location.pathname === "/sign-in" || location.pathname === "/sign-up" ? null : <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route path="/home" element={<Home />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/add-recipes" element={<AddRecipe />} />
        <Route path="/details-recipes" element={<DetailResep />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* <ToastContainer /> */}
      {location.pathname === "/sign-in" || location.pathname === "/sign-up" ? null : <Footer />}
    </>
  );
}

export default App;
