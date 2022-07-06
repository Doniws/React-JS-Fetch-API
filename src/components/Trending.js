import { Card, Container, Image, Row } from "react-bootstrap";
import Spiderman from "../assets/images/bg/Spider-Man.webp"
import axios from "axios";
import { useEffect, useState } from "react";

const Trending = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: `c43d28670ea3fcd1b48f13a4a7423410`
            }
        }).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    return (
        <div id="Trending">
            <Container>
                <h1 className="text-align-center">Trending Movies</h1>
                <div className="wrapper-card">
                    {movies.map((results,index) => {
                        return (
                            <Card className="card-container bg-dark text-white" key={index}>
                                <Image
                                    src={`${`https://image.tmdb.org/t/p/w500`}/${results.poster_path}`}
                                    className="movieimg"
                                    alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>{results.title}</Card.Title>
                                    <Card.Text >
                                        {results.overview}
                                    </Card.Text>
                                    <Card.Text>{results.release_date}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        )
                    })}

                </div>
            </Container>
        </div>

    )
}

export default Trending;