import {Container,Image, Row,Col} from 'react-bootstrap';
import galeria from './data'
import './galeria.css'
export default function home() {
    return (
<Container>
    <Row>
        {
        galeria.map(i=>(
                <Col sm={4} className="colunas"><Image fluid className="imagens" src={i.url} alt={i.alt}></Image></Col>
    ))
    }
    </Row>
</Container>
    )
}