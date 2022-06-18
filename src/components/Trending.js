import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import eeaoImage from "../assets/images/trending/eeao.jpg"
import hustleImage from "../assets/images/trending/hustle.jpg"
import obiwanImage from "../assets/images/trending/obiwan.jpg"
import doctorStrangeImage from "../assets/images/trending/doctor-strange.jpg"
import strangerImage from "../assets/images/trending/stranger-things.jpg"
import topgunImage from "../assets/images/trending/topgun.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <h1 className="text-white p-4" id="trending">
                    TRENDING MOVIES
                </h1>
                <Row>
                    <Col md={4}>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={eeaoImage} alt="eeao" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Everything Everywhere All at Once</Card.Title>
                                <Card.Text className="text-start">
                                    This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={hustleImage} alt="hustle" />
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Hustle</Card.Title>
                                <Card.Text className="text-start">
                                    This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={obiwanImage} alt="obiwan" />
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Obi-Wan</Card.Title>
                                <Card.Text className="text-start">
                                    This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={doctorStrangeImage} alt="eeao" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Doctor Strange in The Multiverse of Madness</Card.Title>
                                <Card.Text className="text-start">
                                    This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={strangerImage} alt="hustle" />
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Stranger Things 4</Card.Title>
                                <Card.Text className="text-start">
                                    This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={topgunImage} alt="obiwan" />
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Top Gun Maverick</Card.Title>
                                <Card.Text className="text-start">
                                    This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Trending