import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthRoute from './components/AuthRoute';
// import Admin from './pages/Admin';
import Support from './pages/Support';
import Challenge from './pages/Challenge';
import Challenges from './pages/Challenges';
import Team from './pages/Team';
import League from './pages/League';
import { useState } from 'react';
import Navbar from './components/Navbar/';
import Home from './pages/Home';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<AuthRoute setUser={setUser} />}>
          <Route path='/dashboard' element={<Dashboard />} />
          {/* <Route path='/admin' element={<Admin user={user} />} /> */}
          <Route path='/support' element={<Support/>} />
          <Route path='/challenge' element={<Challenge/>} />
          <Route path='/challenges' element={<Challenges/>} />
          <Route path='/league' element={<League/>} />
          <Route path='team' element={<Team/>} />
        </Route>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
