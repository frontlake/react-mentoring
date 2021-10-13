function App() {
  let email = '';
  let password = '';

  const handleOnChange = (e) => {
    if (e.target.type === 'email') {
      email = e.target.value.trim();
    }
    if (e.target.type === 'password') {
      password = e.target.value.trim();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Все поля должны быть заполнены!');
    } else {
      console.table({ email, password });
      email = '';
      password = '';
    }
    e.target.reset();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="email"
          placeholder="E-Mail"
          onChange={handleOnChange}
        />
        <input
          className="form__input"
          type="password"
          placeholder="Password"
          onChange={handleOnChange}
        />
        <button className="form__btn" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default App;
