import React from 'react';

const getCurrentDate = () => {
  const date = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('ru-Ru', options);
};

const Profile = (props) => {
  console.log(props.children);
  return (
    <div className="card">
      <h1 className="heading">
        Привет, <b>{props.name}!</b>
      </h1>
      <p className="text">Дата регистрации: {props.registeredAt}</p>
    </div>
  );
};

class ClassProfile extends React.Component {
  render() {
    return (
      <div className="card">
        <h1 className="heading">
          Привет, <b>{this.props.name}!</b>
        </h1>
        <p className="text">Дата регистрации: {this.props.registeredAt}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="container">
      <Profile name="Вася" registeredAt={getCurrentDate()} />
      <ClassProfile name="Вася" registeredAt={getCurrentDate()} />
    </div>
  );
}

export default App;
