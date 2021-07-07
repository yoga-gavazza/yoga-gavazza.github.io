import React, { useState, useEffect } from "react";

import "./login.css";
import { Link, useHistory } from "react-router-dom";
import apiSevice from "../../service/api.service";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";

export default function Login() {
  const [username, setLogin] = useState("");
  const [password, setSenha] = useState("");
  const [load, setload] = useState(false);
  const [UserPass, setUserPass] = useState(false);
  const history = useHistory();
  const token = "yoga@token";
  useEffect(() => {
    let store = JSON.parse(localStorage.getItem(token));
    if (store !== null) {
      history.push("/postagem");
    }
  }, [history]);

  async function handleLogin(e) {
    e.preventDefault();
    setUserPass(false);
    if (username !== "" || password !== "") {
      setload(true);
      apiSevice
        .post("/auth/login", {
          username,
          password,
        })
        .then((response) => {
          localStorage.clear();
          localStorage.setItem(token, JSON.stringify(response.data));
          history.push("/postagem");
          setload(false);
        })
        .catch((err) => {
          setload(false);
          console.log(err);
          setUserPass(true);
          //alert("Erro ao logar: verifique seu login e senha!");
        });
    }
  }

  return (
    <Row>
      <Col xl={{ span: 4, offset: 4 }} className="login-container">
        <Form onSubmit={handleLogin}>
          <h5 id="textologin">faça seu login:</h5>
          {UserPass ? (
            <span id="erro">Usuário ou Senha incorreto</span>
          ) : (
            <div></div>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Usuário</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Login"
              value={username}
              onChange={(e) => setLogin(e.target.value)}
            ></Form.Control>
            <Form.Label>Senha</Form.Label>
            <Form.Control
              required
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setSenha(e.target.value)}
            ></Form.Control>
          </Form.Group>
          {!load ? (
            <Button variant="primary" type="submit">
              Submit
            </Button>
          ) : (
            <Spinner animation="grow" />
          )}
          <Link className="row" to="/registro"></Link>
        </Form>
      </Col>
    </Row>
  );
}
//flex-direction: column;
//<button className="button" type='submit'>Entrar</button>
