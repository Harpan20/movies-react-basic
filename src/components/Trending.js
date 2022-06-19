import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Trending = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/trending/movie/week`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY
            }
        }).then((response) => {
            setMovies(response.data.results)
        })
    }, [])


    return (
        <div>
            <Container>
                <h1 className="text-white p-4" id="trending">
                    TRENDING MOVIES
                </h1>
                <Row>
                    {
                        movies.map((result, index) => {
                            return (
                                <Col md={4} key={index}>
                                    <Card className="bg-dark text-white text-center movieImage">
                                        <Image src={`${process.env.REACT_APP_IMAGE_URL}/${result.poster_path}`} alt={result.title} />
                                        <div className="p-2 m-1 text-white">
                                            <Card.Title className="text-center">{result.title}</Card.Title>
                                            <Card.Text className="text-start">
                                                {result.overview}
                                            </Card.Text>
                                            <Card.Text className="text-start">{result.release_date}</Card.Text>
                                        </div>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

        </div>
    )
}

export default Trending