import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form, Container } from "./styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Container>
        <Form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
          <hr />
          <Link to="/main">Fazer login</Link>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
