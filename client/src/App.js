import React, { useContext } from 'react'
import Navbar from './components/Navbar/Navbar';
import Create from './Pages/Create/Create';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import PostDetail from './Pages/PostDetail/PostDetail';
import Register from './Pages/Register/Register';
import UserSettings from './Pages/UserSettings/UserSettings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Context } from './context/Context';

const App = () => {
  const { user } = useContext(Context);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={user ? <Home /> : <Register />} />
          <Route exact path="/login" element={user ? <Home /> : <Login />} />
          <Route exact path="/create" element={user ? <Create /> : <Register />} />
          <Route exact path="/usersetting" element={user ? <UserSettings /> : <Register />} />
          <Route exact path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;