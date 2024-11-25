function UserList({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
