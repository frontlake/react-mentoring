import React from 'react';

export default function App() {
  const [users, setUsers] = React.useState([]);

  const url = 'https://61784062bb979200171ff624.mockapi.io/users';

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {users !== 'Not found' && users.length > 0 ? (
          users.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          <li>нет данных</li>
        )}
      </ul>
      <button onClick={getUsers}>Получить спискок пользователей</button>
    </div>
  );
}
