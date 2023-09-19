import { Col, Container, Row, Table } from 'react-bootstrap'


export default function Layout ({data}) {

    const { fetchUrl, th2, th3, fetchedData, td1, td2, td3 } = data;

    return (
        <Container>
            <Row>
                <Col className="col-12 col-lg-6 d-flex justify-content-center">
                    <h1>Daily Views</h1>
                    <div style={{ height: "50vh", overflow: "auto", scrollbarWidth: "none", borderRadius: "15px" }}>
                    <style>
                        {`
                        div::-webkit-scrollbar {
                            display: none;
                        }

                        #custom-table2Heading{
                            vertical-align: top;
                        }
                        `}
                    </style>
                    <Table id="custom-table2" striped bordered responsive>
                        <thead>
                            <tr>
                            <th>Time</th>
                            <th>{th2}</th>
                            <th>{th3}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchedData.map((res,index) => (
                            <tr key={index}>
                                <td>{td1}</td>
                                <td>{td2}</td>
                                <td>{td3}</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                </Col>
                <Col className="col-12 col-lg-6 d-flex justify-content-center">
                    <h1>Monthly Views</h1>
                </Col>
            </Row>
        </Container>
    )
}