import { Col, Container, Row } from 'react-bootstrap'


export default function Layout ({data}) {
    const { fetchUrl } = data;

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Daily Views</h1>
                </Col>
                <Col>
                    <h1>Monthly Views</h1>
                </Col>
            </Row>
        </Container>
    )
}