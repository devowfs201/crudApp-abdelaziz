import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/view-user/:id" element={<ViewUser />} />
        </Routes>
    </Router>
  );
}

export default App;
