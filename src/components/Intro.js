import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white d-flex justify-content-center align-item-center text-center">
                <Row>
                    <Col>
                        <div className="title">
                            MOVIES LIST
                        </div>
                        <div className="intoButton text-center mt-4">
                            <Button variant='light' href='#trending'>
                                See All List
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro