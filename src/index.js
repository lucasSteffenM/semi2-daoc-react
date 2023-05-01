import React from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Usuário:
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <br />
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

ReactDOM.render(<LoginForm />, document.getElementById('root'));
