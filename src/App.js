import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Error404 from "./pages/error404/Error404";
import Advertising from "./pages/advertising/Advertising";
import HomePage from "./pages/home/HomePage";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/Navbar"
import LeftBar from "./components/leftBar/LeftBar"
import RightBar from "./components/rightBar/RightBar"
import ProtectedRoute from "./pages/protectedRoute/ProtectedRoute";
import "./style.scss"
import { useDarkModeContext } from "./contexts/DarkModeContext";
import Info from "./pages/info/Info";

function App() {
  const { darkMode } = useDarkModeContext()

  const Layout = ({ children }) => {
    return <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div className="row align-items-start m-0">
        <LeftBar className="col-3"/>
        <div className="col-12 col-md-6 p-0">
          {children}
        </div>
        <RightBar className="col-3" />
      </div>
    </div>

  }
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<ProtectedRoute active={true} />}>
          <Route exact path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<ProtectedRoute active={true} />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/advertising" element={<Advertising />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/who-are-we" element={<Info />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route exact path="/" element={<Layout children={<HomePage />} />} />
        </Route>
        {/* <Route path="/" element={<Layout children={<HomePage />} />} /> */}
        <Route path="/profile/:id" element={<ProtectedRoute />}>
          <Route exact path="/profile/:id" element={<Layout children={<Profile />} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
