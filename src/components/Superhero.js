import { Card, Container, Image } from "react-bootstrap";
import Spiderman from "../assets/images/bg/Spider-Man.webp"

const Superhero = () => {
    return (
        <div id="Superhero">
            <Container>
                <h1 className="text-align-center">Trending Movies</h1>
                <div className="wrapper-card">
                    <Card className="card-container bg-dark text-white">
                        <Image
                            src={Spiderman}
                            className="movieimg"
                            alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text >
                                This is a wider card with supporting text
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="card-container bg-dark text-white">
                        <Image
                            src={Spiderman}
                            className="movieimg"
                            alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text >
                                This is a wider card with supporting text
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="card-container bg-dark text-white">
                        <Image
                            src={Spiderman}
                            className="movieimg"
                            alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text >
                                This is a wider card with supporting text
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="card-container bg-dark text-white">
                        <Image
                            src={Spiderman}
                            className="movieimg"
                            alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text >
                                This is a wider card with supporting text
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="card-container bg-dark text-white">
                        <Image
                            src={Spiderman}
                            className="movieimg"
                            alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text >
                                This is a wider card with supporting text
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </Container>
        </div>

    )
}

export default Superhero;