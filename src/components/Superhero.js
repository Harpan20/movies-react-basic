import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengersEndgameImage from "../assets/images/superhero/avengers-endgame.jpg"
import captainAmericaImage from "../assets/images/superhero/captain-america.jpg"
import ironmanImage from "../assets/images/superhero/ironman.jpg"
import theAnvengersImage from "../assets/images/superhero/the-avengers.jpg"
import thorImage from "../assets/images/superhero/thor.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <h1 className="text-white p-4" id="superhero">
                    SUPERHERO MOVIES
                </h1>
                <Row>
                    <Col md={4}>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={antmanImage} alt="antman" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Ant-Man</Card.Title>
                                <Card.Text className="text-start">
                                    This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={avengersEndgameImage} alt="avengers end game" />
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Avengers End Game</Card.Title>
                                <Card.Text className="text-start">
                                    This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={captainAmericaImage} alt="captain america" />
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Captain America The First Avenger</Card.Title>
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
                            <Image src={ironmanImage} alt="iron man" />
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Iron Man</Card.Title>
                                <Card.Text className="text-start">
                                    This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={theAnvengersImage} alt="the avengers" />
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">The Avengers</Card.Title>
                                <Card.Text className="text-start">
                                    This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-start">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="bg-dark text-white text-center movieImage">
                            <Image src={thorImage} alt="thor" />
                            <div className="p-2 m-1">
                                <Card.Title className="text-center">Thor Love and Thunder</Card.Title>
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

export default Superhero