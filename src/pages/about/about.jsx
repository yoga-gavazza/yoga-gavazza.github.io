import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
export default function about() {
    return (<Container>
        <Row className="justify-content-md-center">
            <Col md="auto">



                <Table responsive>
                    <thead>
                        <h1>Contatos</h1>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Contato:</td> <td>Vera Gavaza</td>
                        </tr>
                        <tr>
                            <td>Telefone:</td> <td>(27) 9 99732190</td>
                        </tr>
                        <tr>
                            <td>Email:</td> <td>gavazzavera@gmail.com</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>)
}