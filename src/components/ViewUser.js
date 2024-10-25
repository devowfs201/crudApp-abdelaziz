import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../redux/userSlice';
import { useParams, useNavigate } from 'react-router-dom';

function ViewUser() {
  const { id } = useParams();
  const user = useSelector(state =>
    state.users.users.find(user => user.id === parseInt(id))
  );
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [username, setusername] = useState(user ? user.username : '');
  const [img, setImg] = useState(user ? user.img : '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/users');
  };

  return (
    <div>
      <h2 className='text-center'>View User details</h2>
      <form onSubmit={handleSubmit} className='container'>
      <div>
            <label  className='form-label' htmlFor="name">Name:</label>
            <input className='form-control'
              disabled
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className='form-label' htmlFor="username">Username:</label>
            <input className='form-control'
              disabled
              type="text"
              id="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div>
            <label className='form-label' htmlFor="email">Email:</label>
            <input className='form-control'
              disabled
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className='form-label my-1' htmlFor="img">Image:</label>
            <img src={user && user.img} alt='img'/>
          </div>
          <button type="text" className='btn btn-primary my-1'>Close</button>
      </form>
    </div>
  );
}

export default ViewUser;
