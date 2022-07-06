import {Navbar, Nav, Container} from 'react-bootstrap';

const NavigationBar = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#Trending">Trending</Nav.Link>
                        <Nav.Link href="#Superhero">Superhero</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar