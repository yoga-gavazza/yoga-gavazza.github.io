import { Container, Row, Col, Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import perfil from '../../assets/perfil.jpg'
export default function about() {
    return (<Container>
        <Row className="justify-content-md-center">
            <Col xl='2'><Image src={perfil} roundedCircle /></Col>
            <Col md="auto">
                <Table responsive>

                    <p className="text"><br />
                        Contato: Vera Gavaza<br />
Telefone: (27) 9 99732190<br />
Email: gavazzavera@gmail.com</p>


                </Table>
            </Col>
        </Row>
    </Container>)
}