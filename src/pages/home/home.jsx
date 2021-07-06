import {Container, Row, Col} from 'react-bootstrap';
import './home.css'
import data from './data'

export default function home() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col lg="10" xs="auto">
                    <article>
                    {data.map(t => (
<div>
                        <h3>{t.title}</h3>
                        <p className="text"> {t.text}</p>
                        <ul>
                        {t.itens?.map(i=>(<li className="text">{i}</li>))}
                        </ul>
                        
                        </div>
                        )
                    )
                    } </article></Col>
            </Row>
        </Container>
    )
}
