import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/userSlice';
import { Link } from 'react-router-dom';

function UserList() {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="container">
      <h2 className='text-center'>User List</h2>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User name</th>
      <th scope="col">Emqil</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.length > 0 ? users.map((user) => (
      <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Link to={`/edit-user/${user.id}`} className='btn btn-warning'>Edit</Link>
          <Link to={`/view-user/${user.id}`} className='btn btn-primary ms-2'>View</Link>
          <button onClick={() => handleDelete(user.id)} className='btn btn-danger ms-2'>Delete</button>
        </td>
      </tr>
    )) : <h5>No users found</h5>}
  </tbody>
</table>
    </div>
  );
}

export default UserList;
