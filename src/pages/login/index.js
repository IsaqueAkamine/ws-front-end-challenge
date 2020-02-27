import React, { useState } from 'react';

import './styles.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        
      </form>
    </div>
  );
}

export default Login;
