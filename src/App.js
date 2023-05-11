import './App.css';
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import AdminLayout from './Layout/AdminLayout';
import PublicLayout from './Layout/PublicLayout';
import AdDashboard from './Component/Admin/AdDashboard';
import TempleDetails from './Component/Admin/Temples/TempleDetails';
import AddTemples from './Component/Admin/Temples/AddTemples';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MasterData from './Component/Admin/MasterData';
import Login from './Component/Admin/Login/Login';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { Navigate } from 'react-router-dom';
import Register from './Component/Admin/Login/Register';

function App() {
  const [authData, setAuthData] = useState({});
  useEffect(() => {
    let data = {
      isAuthenticated: false,
      role: "",
      name: "",
      email: "",
      mobile: "",
    }
    try {
      var storaData = localStorage.getItem(process.env.REACT_APP_STORAGE_KEY) ?? JSON.stringify(data);
      storaData = storaData.replace("\"{", "'{").replace("}\"", "}'")
      storaData = JSON.parse(storaData);
      var token = storaData?.accessToken;
      var decodedToken = jwtDecode(token);
      if (decodedToken?.exp===undefined || new Date() > new Date(decodedToken?.exp * 1000)) {
        <Navigate to="/admin/login" replace={true}></Navigate>
        return;
      }
      setAuthData({ ...storaData });
    } catch (error) {
      console.log("invalid token", error);
      <Navigate to="/admin/login" replace={true}></Navigate>
    }

  },[]);



  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/"  element={<Login  setAuthData={setAuthData}  />} />
        <Route path="/admin"  element={<Login  setAuthData={setAuthData}  />} />
          <Route path="/admin/login"  element={<Login  setAuthData={setAuthData}  />} />
          <Route path="/admin/register" element={<Register />} />
          <Route element={<PublicLayout />}>

          </Route>
          <Route element={<AdminLayout  authData={authData}/>}>
            <Route path="/admin/Dashboard" element={<AdDashboard />} />
            <Route path="/admin/temple/details" element={<TempleDetails />} />
            <Route path="/admin/temple/add" element={<AddTemples />} />
            <Route path="/admin/master/data" element={<MasterData />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
