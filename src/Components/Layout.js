import { Col, Container, Row, Table } from 'react-bootstrap'


export default function Layout ({data}) {

    const { table1H1, table2H1, th2, th3, fetchedData, td1, td2, td3 } = data;

    function convertToPhilippineTime(time) {
        const options = {
          timeZone: "Asia/Manila",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        };
      
        return new Date(time).toLocaleString("en-US", options);
      }

    return (
        <Container>
            <Row>
                <Col className="col-12 col-lg-6 d-flex justify-content-center">
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
                        <Table id="custom-table2" striped bordered responsive className="text-center my-5">
                            <thead>
                                <tr>
                                    <th colSpan="3">
                                        <h1 className="text-center">{table1H1}</h1>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Time</th>
                                    <th>{th2}</th>
                                    <th>{th3}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fetchedData.map((res,index) => (
                                <tr key={index}>
                                    <td>{convertToPhilippineTime(res[td1])}</td>
                                    <td>{td2.map((prop) => res[prop]).join(", ")}</td>
                                    <td>{res[td3]}</td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col className="col-12 col-lg-6 d-flex justify-content-center">
                    <h1>{table2H1}</h1>
                </Col>
            </Row>
        </Container>
    )
}