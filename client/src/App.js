import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Create from './Pages/Create/Create';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import PostDetail from './Pages/PostDetail/PostDetail';
import Register from './Pages/Register/Register';
import UserSettings from './Pages/UserSettings/UserSettings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/usersetting" element={<UserSettings />} />
          <Route exact path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;