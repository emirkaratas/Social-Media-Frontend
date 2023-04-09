import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Error404 from "./pages/error404/Error404";
import HomePage from "./pages/home/HomePage";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/Navbar"
import LeftBar from "./components/leftBar/LeftBar"
import RightBar from "./components/rightBar/RightBar"
import ProtectedRoute from "./pages/protectedRoute/ProtectedRoute";

function App() {
  const Layout = ({ children }) => {
    return <>
      <Navbar />
      <LeftBar />
      {children}
      <RightBar />
    </>

  }
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<ProtectedRoute active={true}/>}>
          <Route exact path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<ProtectedRoute active={true}/>}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Layout children={<HomePage />} />} />
        <Route path="/profile/:id" element={<ProtectedRoute />}>
          <Route exact path="/profile/:id" element={<Layout children={<Profile />} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
