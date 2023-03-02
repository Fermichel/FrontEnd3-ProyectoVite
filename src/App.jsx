import { useState } from 'react';
import './App.css'


function App() {
  //Creamos un estado para cada inputs del formulario
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // Creamos un manejador de eventos para cada uno de los inputs
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  //Creamos el manejador para el evento onSubmit
  const onSubmitForm = (e) =>{
    e.preventDefault();
    //realizamos las validaciones con los valores almacenados en el estado
    const isUsernameValid = validateUserName(userName);
    const isPassValid = validatePass(password);
    //Si al menos una de las validaciones es false mostramos un mensaje de error
    if(!isUsernameValid || !isPassValid){
      alert('Alguno de los datos ingresados es falso');
    }else{
      alert(`Bienvenido: ${userName}`);
    }
    console.log('el nombre ingresado es: ' + userName +" pass ingresada es: "+ password )
  };

  //Creamos una funcion para validar el nombre de usuario
  const validateUserName = (userName) =>{
    // Eliminamos los espacios en blanco
    const whithoutSpaces = userName.trim();
    
    //validamos la extension
    if (whithoutSpaces.length > 2){
      return true;
    }else{
      return false;
    }
  };

  //Creamos la funcion para validar el password
  const validatePass = (password) =>{
    //eliminamos espacios en blanco
    const whithoutSpaces = password.trim();
    //Separamos el string en un array para luego recorrerlo y validar si existe al menos un numero.
    const passAsArray =whithoutSpaces.split("");
    //.some nos retorna true al menos una de las iteraciones es verdadera
    const hasNumber = passAsArray.some((character) =>{
      //Si el valor es NaN, no es un numero
      if(isNaN(character)){
        return false;
      }else{
        return true;
      }
    });
    //validamos la extension y que haya al menos un numero
    if(whithoutSpaces.length > 5 && hasNumber){
      return true;
    }else{
      return false;
    }
  };


  return (
    <div className="App">
    <h3>Iniciar Sesión</h3>
{/* Pasamos nuestro manejador al evento onSubmit */}
    <form onSubmit={onSubmitForm}>
    <input type="text"
          placeholder="Nombre de usuario"
          value={userName}
          onChange={onChangeUserName}
    />
    <input type ="password" placeholder='password' value={password} onChange={onChangePassword}/>

    <button type='submit'>Enviar</button>
    </form>
    </div>
  )
}

export default App
