import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dept_incharge from './Pages/Dashboard/Dept_incharge';
import Login from './Pages/Login/Login';
import Notfound from './Pages/NotFound/Notfound';
import Info from './Pages/Home/Info';
import Hr_Admin from './Pages/Dashboard/Hr_Admin';
import L_report from './Pages/Dashboard/L_report';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/info' element={<Info />}>info</Route>
        <Route path='/login' element={<Login />}>info</Route>
        <Route path='/Report' element={<L_report />}>info</Route>
        <Route path='/final_approve' element={<Hr_Admin />}> </Route>
        <Route path='/dept_head' element={<Dept_incharge />}> </Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
