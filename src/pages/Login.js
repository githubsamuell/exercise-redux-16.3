import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../actions';

function Login({handleLoginUser, isUserLoggedIn}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    handleLoginUser({ email, password });
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

//1º LER 
//RECEBE O STORE COMO PARAM
//RETORNAR UM OBJETO
const mapStateToProps = ({user}) => {
  return ({
    isUserLoggedIn: user.isUserLoggedIn
  })
}

// //2ºESCREVER
// //RECEBE O DISPATCH COMO PARAM
// //RETORNA UM OBJETO
const mapDispatchToProps = (dispatch) => {
  return ({
    handleLoginUser: (user) => dispatch(loginUser(user)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
