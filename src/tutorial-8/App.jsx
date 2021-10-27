import React from 'react';

export default function App() {
  const [users, setUsers] = React.useState([]);

  const url = 'https://61784062bb979200171ff624.mockapi.io/users';

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  return (
    <div>
      <ul>
        {users === 'Not found' ? (
          <li>{users} - не удалось получить ответ от сервера</li>
        ) : (
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })
        )}
      </ul>
      <button onClick={getUsers}>Получить спискок пользователей</button>
    </div>
  );
}
