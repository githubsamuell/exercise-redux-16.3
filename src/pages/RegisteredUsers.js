import { connect } from 'react-redux';
import { removeUser } from '../actions';

function RegisteredUsers({usersList, handleRemoveUser}) {
  return (
    <div className="App">
      <h2>Usuários registrados</h2>
      {
        usersList.length === 0
          ? (
            <h4>Login não efetuado</h4>
          )
          : (
            <ul>
              {usersList.map((user) => (
                <li key={user.email} >{ user.name }</li>
              ))}
            </ul>
          )
      }
    </div>
  );
}

//1º LER 
//RECEBE O STORE COMO PARAM
//RETORNAR UM OBJETO
const mapStateToProps = ({user}) => {
  return ({
    usersList: user.usersList
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    handleRemoveUser: (user) => dispatch(removeUser(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredUsers);
