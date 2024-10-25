import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setusername] = useState('');
  const [img, setImg] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: Date.now(), name, email,username ,img}));
    navigate('/users');
  };

  return (
    <div>
      <h2 className='text-center'>Add User</h2>
      <form onSubmit={handleSubmit} className='form container'>
          <div>
            <label  className='form-label' htmlFor="name">Name:</label>
            <input className='form-control'
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className='form-label' htmlFor="username">Username:</label>
            <input className='form-control'
              type="text"
              id="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div>
            <label className='form-label' htmlFor="email">Email:</label>
            <input className='form-control'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className='form-label' htmlFor="img">Image:</label>
            <input className='form-control'
              type="text"
              id="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
        <button type="submit" className='btn btn-primary my-1'>Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
