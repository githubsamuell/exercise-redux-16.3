import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login({handleLoginUser, isUserLoggedIn}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    if (isUserLoggedIn) history.push('users');

  }, [history, isUserLoggedIn]);

  return (
    <div className="App">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            type="text"
            placeholder="Seu melhor e-mail"
            name="email"
            onChange={({target})=> setEmail(target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="********"
            name="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
