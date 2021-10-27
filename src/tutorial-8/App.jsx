import React from 'react';

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState(false);

  const url = 'https://61784062bb979200171ff624.mockapi.io/users';

  const getUsers = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const users = await response.json();
      setUsers(users);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {error ? (
          <li>Что-то пошло не так...</li>
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
