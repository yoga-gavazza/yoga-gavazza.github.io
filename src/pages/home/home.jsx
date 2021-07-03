
import { Container, Row, Col } from 'react-bootstrap';
import './home.css'
import propaganda from '../../assets/propaganda-curso.png'
import circulo from '../../assets/circulo-yoga.png'
export default function home() {
    return (<Container>
        <Row className="justify-content-md-center">
            <Col xs lg='8' md="auto">
                <h1 className="text">Curso de Formação em Yoga</h1>

            </Col>
        </Row>
        <Row>
            <Col xs lg="8">
                <img src={propaganda} alt="Propaganda" />
                <p className='text justify'>
                    Namaste!
                    <br />
                    Estamos muito felizes. As condições se reuniram para um novo Curso de
                    Yoga acontecer em novembro de 2020!
<br />
                    Esta é a sua chance de participar da quarta edição deste curso intensivo
                    que vem transformando cada aluno e capacitando novos professores
                    qualificados de yoga. E temos uma novidade chegando para essa turma! O curso
                    de Yoga poderá ser realizado presencialmente ou à distância, com aulas sendo
                    transmitidas ao vivo, direto da nossa sala de Yoga. Forme-se com o Marzen de
                    qualquer lugar do mundo.
<br />
                    É um curso aberto para todos que buscam uma vida mais
                    consciente, disciplinada, equilibrada e que desejam compartilhar os
                    ensinamentos e trabalhar com Yoga e meditação.
<br />
                    Um curso para TODOS: iniciantes, praticantes, educadores, estudantes e
                    profissionais de todas as áreas são bem-vindos para este momento de imersão
                    e conhecimento.
                    Sem dúvida nenhuma, todos sairão transformados!
                    Gostou? Então Leia abaixo mais algumas informações.
<br />
                    Curso de Formação em Yoga 2020
                </p></Col>
        </Row>
        <Row>
            <Col xs lg="8">
                <img src={circulo} alt="Propaganda" />
                <p className='text justify'><h3>Sobre o curso</h3>
                    Mais do que um curso de formação profissional, uma oportunidade de se
                    aprofundar na prática e compreender a importância de diferentes aspectos
                    fundamentais para o autoconhecimento. <br />
                    O coração de nossa filosofia é o conhecimento que transmitimos.
                    Neste curso você receberá ferramentas necessárias para ensinar yoga e
                    desenvolver uma prática pessoal. Seremos uma comunidade solidária – Sangha
                    – e ajudaremos todos nesta jornada. <br />
                    O Curso também capacita como professor de Haṭha-Yoga.
                    <br />
                    <br />
                    <h3 className='text'>Quem pode fazer o curso </h3>

                    Todos que desejarem ter uma vida mais feliz, empoderar-se de sua jornada
                    espiritual e de autoconhecimento, transmitirem os ensinamentos e práticas do
                    Yoga, auxiliando também aos demais alunos em suas respectivas jornadas. Este
                    curso é um mergulho profundo, seja qual for a sua busca, para entrar em contato
                    com sua sabedoria espiritual.
                    <br />
                    Carga horária
                    200 horas de aulas teóricas, práticas e estágio*.
                    * obrigatório para quem quer atuar como professor.
                    <br />
                    <p className="text left">
                        O que você irá aprender
                        Introdução à história e filosofia do Yoga;
                        Estilos de Yoga: Haṭha-Yoga tradicional, Vinyasa Flow Yoga, Yoga
                        restaurativa;
                        Anatomia do Yoga (sistema energético sutil);
                        Anatomia e fisiologia do corpo humano;
                        Lesões comuns na prática de Yoga;
                        Meditação/Nidra/Sânscrito para āsanas e mantras;
                        Os Yoga-Sūtras de Patañjali: Conhecendo a tradição;
                        Alinhamento e ajustes de āsanas e técnicas de como ensinar;
                        Marketing do Yoga;
                        Ética e como lecionar o Yoga.
                    </p>

                </p>
            </Col>
        </Row>
    </Container>)
}