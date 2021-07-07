import React, { useState } from "react";
import apiService from "../../service/api.service";
import "./registro.css";
import { useHistory } from "react-router-dom";
import { Col, Form, Row, Button } from "react-bootstrap";

export default function RegisterUser() {
  const [name, setName] = useState("");
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const history = useHistory();

  const confereDados = () => {
    return username !== "" && password !== "" && name !== "";
  };
  async function SendData() {
    setLoad(true);

    const data = {
      username,
      password,
      name,
      email: "vera@gmail.com",
      telefone: "299999",
      sobre: "Veroca",
    };

    if (!confereDados()) {
      setLoad(false);
    } else {
      apiService
        .post("user", data)
        .then((response) => {
          console.log("Cadastro realizado com sucesso", response.status);
          history.push("/login");
          setLoad(false);
        })
        .catch((err) => {
          setLoad(false);
          console.log("Erro no cadastro tente novamente: ", err.response.data);
        });
    }
  }

  return (
    <Row>
      <Col>
        <Form className="col s6 offset-s3" onsubmit="return false">
          <Form.Label>nome</Form.Label>
          <Form.Control
            type="text"
            value={name}
            id="fullName"
            onChange={(e) => setName(e.target.value)}
          />

          <Form.Label>username</Form.Label>
          <Form.Control
            className="validate"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsename(e.target.value)}
          />

          <Form.Label>Senha</Form.Label>
          <Form.Control
            id="senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {load ? (
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          ) : (
            <Button onClick={() => SendData()} variant="primary" type="submit">
              Submit
            </Button>
          )}
        </Form>
      </Col>
    </Row>
  );
}
