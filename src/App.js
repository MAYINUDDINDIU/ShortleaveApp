import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Dept_incharge from './Pages/Dashboard/Dept_incharge';
import Login from './Pages/Login/Login';
import Notfound from './Pages/NotFound/Notfound';
import Info from './Pages/Home/Info';
import Hr_Admin from './Pages/Dashboard/Hr_Admin';
import L_report from './Pages/Dashboard/L_report';
import Requisitionpaper from './Pages/Requisition/Requisitionpaper';
import Signup from './Pages/Signup/Signup';
import PrivateRoute from '../src/Pages/PrivateRoute/PrivateRoute';
import Log from './Pages/Login/Log';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/shortleaveform' element={<PrivateRoute><Home /></PrivateRoute>}>Home</Route>
        <Route path='/info' element={<Info />}>info</Route>
        <Route path='/' element={<Log />}>Login</Route>
        <Route path='/signup' element={<Signup />}>Signup</Route>
        <Route path='/Report' element={<L_report />}>L_report</Route>
        <Route path='/final_approve' element={<PrivateRoute><Hr_Admin /></PrivateRoute>}> </Route>
        <Route path='/dept_head' element={<Dept_incharge />}> </Route>
        <Route path='/Requisition' element={<Requisitionpaper />}> </Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
