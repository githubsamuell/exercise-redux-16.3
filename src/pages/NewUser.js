import { useState } from 'react';
import { Link } from 'react-router-dom';

function NewUser({handleAddUser}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [isRegistered, setIsregistered] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="App">
      <h2>Login</h2>
      {
        isRegistered
          ? <Link to="users">Ver Usuários</Link>
          : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                <input
                  type="text"
                  placeholder="Seu nome"
                  name="name"
                  onChange={({target}) => setName(target.value)}
                />
              </label>
              <label htmlFor="age">
                <input
                  type="number"
                  placeholder="Sua idade"
                  name="age"
                  onChange={({target}) => setAge(target.value)}
                />
              </label>
              <label htmlFor="email">
                <input
                  type="text"
                  placeholder="Seu melhor e-mail"
                  name="email"
                  onChange={({target}) => setEmail(target.value)}
                />
              </label>
              <button type="submit">Cadastrar</button>
            </form>
          )
      }
    </div>
  );
}

export default NewUser;
