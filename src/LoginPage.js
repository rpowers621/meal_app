import React, { useContext, useState } from "react";
import { useHistory } from 'react-router';

function LoginPage() {
  // const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  const history = useHistory(); 


  console.log("this is your token", token);
  const handleClick = () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch("http://127.0.0.1:3000/token", opts)
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("There has been some error");
      })
      .then(data => {
        console.log("this came from the backend", data.access_token );
        sessionStorage.setItem("token", data.access_token );
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="LoginPage">
      <h1>Login</h1>
      {token && token != "" && token != undefined ? (
        "You are logged in with" + token
      ) : (
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
