import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white d-flex justify-content-center align-item-center text-center">
                <Row>
                    <Col>
                        <div className="title">
                            MOVIES LIST
                            <div className="intoButton text-center mt-4">
                                <Button variant='light'>
                                    See All List
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro