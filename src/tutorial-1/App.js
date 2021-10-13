import React from 'react';

const getCurrentDate = () => {
  const date = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('ru-Ru', options);
};

const Profile = (props) => {
  return (
    <div className="card">
      <h1 className="heading">
        Привет, <b>{props.name ? props.name : 'Аноним'}!</b>
      </h1>
      <p className="text">
        Дата регистрации: {props.registeredAt ? props.registeredAt : 'неизвестно.'}
      </p>
    </div>
  );
};

class ClassProfile extends React.Component {
  render() {
    return (
      <div className="card">
        <h1 className="heading">
          Привет, <b>{this.props.name ? this.props.name : 'Аноним'}!</b>
        </h1>
        <p className="text">
          Дата регистрации: {this.props.registeredAt ? this.props.registeredAt : 'неизвестно.'}
        </p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="container">
      <Profile name="Вася" registeredAt={getCurrentDate()} />
      <ClassProfile name="Петя" registeredAt={getCurrentDate()} />
    </div>
  );
}

export default App;
