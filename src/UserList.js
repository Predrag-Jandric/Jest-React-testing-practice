function UserList({ users }) {
  return (
<div className="max-w-4xl mx-3 mt-6">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left py-3 px-6 font-medium text-gray-700">
              Name
            </th>
            <th className="text-left py-3 px-6 font-medium text-gray-700">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="py-3 px-6 text-gray-800">{user.name}</td>
              <td className="py-3 px-6 text-gray-800">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
