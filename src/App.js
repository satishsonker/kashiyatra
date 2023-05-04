import logo from './logo.svg';
import './App.css';
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import AdminLayout from './Layout/AdminLayout';
import PublicLayout from './Layout/PublicLayout';
import AdDashboard from './Component/Admin/AdDashboard';

function App() {


  return (
    <div className="App">
   <Router>
   <Routes>
        <Route element={<PublicLayout />}>
       
        </Route>
        <Route element={<AdminLayout />}>
        <Route path="/" element={<AdDashboard />} />
        </Route>
      </Routes>
   </Router>
    </div>
  );
}

export default App;
