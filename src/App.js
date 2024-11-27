
import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList'

function App() {
const [users, setUsers] = useState([])

const onUserAdd = (user) => {
  setUsers([...users, user])
}

  return (
    <div className='bg-green-800 pt-6 h-screen'>
      <h1 className='text-white text-3xl m-3'>Jest testing - practice</h1>
      <UserForm onUserAdd={onUserAdd} />
      
      <UserList users={users} />
    </div>
  );
}

export default App;
