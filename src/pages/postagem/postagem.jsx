import { useState, useEffect } from "react";
import { Form, Spinner, Button, Row, Col } from "react-bootstrap";
import apiService from "../../service/api.service";
import "./postagem.css";
import { useHistory } from "react-router-dom";

export default function Postagem() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [load, setLoad] = useState(false);
  const [id, setId] = useState("");
  const [postagem, setPostagem] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setLoad(true);
    const storage = JSON.parse(localStorage.getItem("yoga@token"));
    if (storage === null) {
      history.push("/login");
    }
    apiService
      .get("postagem")
      .then((response) => {
        let reverse = response.data.reverse();
        setPostagem(reverse);
        setLoad(false);
      })
      .catch((e) => {
        console.log(e);
        setLoad(false);
      });
  }, [history]);

  const atualizar = () => {
    apiService
      .get("postagem")
      .then((response) => {
        let reverse = response.data.reverse();
        setPostagem(reverse);
        setLoad(false);
      })
      .catch((e) => {
        console.log(e);
        setLoad(false);
      });
  };
  const atualizarPostagem = () => {
    setLoad(true);
    console.log(date);
    const data = {
      title,
      text,
      date,
    };
    apiService
      .put(`postagem/${id}`, data)
      .then((response) => {
        console.log(response);
        setLoad(false);
        atualizar();
        clearData();
      })
      .catch((err) => {
        setLoad(false);
      });
  };
  const editar = (post) => {
    setDate(post.date);
    setTitle(post.title);
    setText(post.text);
    setId(post._id);
  };
  const getDate = () => {
    let newDate = new Date();
    setDate(newDate.toString());
    console.log(date);
  };
  const clearData = () => {
    setDate("");
    setId("");
    setText("");
    setTitle("");
  };
  const SendData = () => {
    setLoad(true);
    const dados = {
      title,
      text,
      date,
    };
    apiService
      .post("postagem", dados)
      .then((response) => {
        console.log(response);
        setLoad(false);
        atualizar();
        clearData();
      })
      .catch((err) => {
        setLoad(false);
      });
  };

  const apagarPostagem = () => {
    apiService
      .delete(`postagem/${id}`)
      .then((response) => {
        console.log(response);
        setLoad(false);
        atualizar();
        clearData();
      })
      .catch((err) => {
        setLoad(false);
      });
  };
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col sm="8" xs="auto">
          <Form>
            {id !== "" ? (
              <Form.Group className="flex">
                <Col sm="4">
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="text" readOnly value={id} id="id" />
                </Col>
              </Form.Group>
            ) : (
              <div></div>
            )}
            <Form.Group>
              <Col sm="6">
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  id="titulo"
                  onBlur={() => getDate()}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label>Texto</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>
            {load ? (
              <Spinner animation="grow" size="sm" />
            ) : (
              <div>
                {id !== "" ? (
                  <div>
                    <Button
                      className="tbns"
                      onClick={() => atualizarPostagem()}
                      variant="outline-dark"
                    >
                      atualizar
                    </Button>
                    <Button
                      className="tbns"
                      onClick={() => clearData()}
                      variant="outline-dark"
                    >
                      Cancelar
                    </Button>

                    <Button
                      className="tbns"
                      onClick={() => apagarPostagem()}
                      variant="outline-danger"
                    >
                      Excluir
                    </Button>
                  </div>
                ) : (
                  <Button
                    className="tbns"
                    onClick={() => SendData()}
                    variant="outline-dark"
                  >
                    Salvar
                  </Button>
                )}
              </div>
            )}
          </Form>
        </Col>
      </Row>
      <div className="padding">
        {postagem.map((post) => (
          <Row key={post._id} className="justify-content-md-center">
            <Col sm="6" xs="auto" className="shadow-box">
              <article>
                <div>
                  <h3>{post.title}</h3>
                  <p className="text"> {post.text}</p>
                </div>
              </article>
            </Col>
            <Col sm="1" xs="auto" className="botoes">
              <Button
                className="tbns"
                variant="outline-dark"
                onClick={() => editar(post)}
              >
                Editar
              </Button>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
}
