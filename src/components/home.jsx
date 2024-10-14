import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Home = () => {

    return (
        <Container>
            <Row>
                <Col>
                <Image src="/Untitled.jpg" rounded /></Col>
                <Col><h1>About me</h1><Row><Col>I am 11 years old and I go to a school called Umca.</Col></Row></Col>
            </Row>
        </Container>
    )

}

export default Home;