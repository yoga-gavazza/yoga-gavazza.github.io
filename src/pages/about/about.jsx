import { Container, Row, Col, Image } from "react-bootstrap";

import perfil from "../../assets/perfil.jpg";
import "./about.css";
export default function about() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xl="10">
          <Image className="img-center" src={perfil} roundedCircle />

          <p className="text text-center">
            <br />
            Contato: Vera Gavaza
            <br />
            Telefone: (27) 9 99732190
            <br />
            Email: gavazzavera@gmail.com
          </p>
        </Col>
      </Row>
    </Container>
  );
}
