import React, { useState } from "react";

const Login = ({ setSignUpPage, user, setUser}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const tryLogin = async () => {
    try {
      const res = await fetch("http://localhost:8000/noteslogin/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const resu = await res.json();
      if(resu.success) setUser(resu.user)
      else setUser("");
    } catch (error) {}
  };
  return (
    <div className="card">
      <h2>Login</h2>

      <div className="row">
        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={tryLogin}>Login</button>
      <div className="login-signup-toggle">
        don't have account?{" "}
        <span onClick={() => setSignUpPage(true)}>Sign-up</span>
      </div>
    </div>
  );
};

export default Login;
