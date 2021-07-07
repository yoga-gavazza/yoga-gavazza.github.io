import { Container, Row, Col, Spinner } from "react-bootstrap";
import "./home.css";
import apiService from "../../service/api.service";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [postagem, setPostagem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiService
      .get("postagem")
      .then((response) => {
        let reverse = response.data.reverse();
        setPostagem(reverse);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      {loading ? (
        <Row>
          <Col md={{ span: 2, offset: 5 }}>
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
          </Col>
        </Row>
      ) : (
        postagem.map((post) => (
          <Row key={post._id} className="justify-content-md-center">
            <Col lg="10" xs="auto">
              <article>
                <div>
                  <h3>{post.title}</h3>
                  <p className="text"> {post.text}</p>
                </div>
              </article>
            </Col>
          </Row>
        ))
      )}
    </Container>
  );
}
