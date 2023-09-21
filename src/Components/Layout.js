import { Col, Container, Row, Table } from 'react-bootstrap'


export default function Layout ({data}) {

    const { table1H1, table2H1, th2, th3, fetchedData, td1, td2, td3, fetchedData2 } = data;

    function convertToPhilippineTime(time) {
        const options = {
          timeZone: "Asia/Manila",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        };
      
        return new Date(time).toLocaleString("en-US", options);
      }
    function formatDate(dateString) {
    const options = { month: 'short', day: 'numeric', year: 'numeric', weekday: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-PH', options);
    }

    return (
        <Container>
            <Row>
                <Col className="justify-content-center">
                <h1 className="text-center my-5">{table1H1}</h1>
                    <div style={{ height: "50vh", overflow: "auto", scrollbarWidth: "none", borderRadius: "15px",
                    marginBottom: "-5rem" }}>
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
                        <Table id="custom-table2" striped bordered responsive className="text-center">
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
                                    <td>{convertToPhilippineTime(res[td1])}</td>
                                    <td>{td2.map((prop) => res[prop]).join(", ")}</td>
                                    <td>{res[td3]}</td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col className="justify-content-center">
                    <h1 className="text-center my-5">{table2H1}</h1>
                    <div style={{ height: "50vh", overflow: "auto", scrollbarWidth: "none", borderRadius: "15px",
                    marginBottom: "10rem" }}>
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
                        <Table id="custom-table2" striped bordered responsive className="text-center">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>{th2}</th>
                                    <th>{th3}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fetchedData2.map((res,index) => (
                                <tr key={index}>
                                    <td>{formatDate(res[td1])}</td>
                                    <td>{td2.map((prop) => res[prop]).join(", ")}</td>
                                    <td>{res[td3]}</td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}