import React,{useState} from 'react';
import "./App.css";



function App() {

  const username = "vicks"
  const password = "password"

  const [usernameState, setusernameState] = useState("");
  const [passwordState ,setpasswordState] = useState("");
  const [loggedIn,setloggedIn] =useState(false);

  function login(){
    if(usernameState === username && passwordState === password){
       setloggedIn(true);
    }
  }
  
  return (
    <div className="App">
      <h1>Login</h1>
      <input type = "text"
      onChange={(e) => {
        setusernameState(e.target.value);
        }}
        />
      <input type = "password"
       onChange={(e) => {
         setpasswordState(e.target.value);
         }}
         />
      <button onClick={login}>Submit</button>
      {loggedIn && <h1>logged In</h1>}
    </div>
  );
}

export default App;