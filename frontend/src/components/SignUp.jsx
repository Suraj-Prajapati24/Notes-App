import React, { useState } from "react";

const SignUp = ({ setSignUpPage , user, setUser}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const doSignup = async () => {
    try {
      const res = await fetch("http://localhost:8000/noteslogin/signup", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const resu = await res.json();
      if(resu.success) setUser(resu.user);
      else setUser("");
    } catch (error) {}
  };
  return (
    <div className="card">
      <h2>SignUp</h2>

      <div className="row">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
      <button onClick={doSignup}>SignUp</button>

      <div className="login-signup-toggle">
        already have account?{" "}
        <span onClick={() => setSignUpPage(false)}>Log-in</span>
      </div>
    </div>
  );
};

export default SignUp;
