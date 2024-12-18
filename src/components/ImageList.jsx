import { Container, Row, Col, Image } from 'react-bootstrap';

export default function ImageList({ images }) {
    return (
        <Container className="my-4">
            <Row className="g-4 d-flex justify-content-center">
                {images.map((image, index) => (
                    <Col key={index} xs={6} sm={4} md={2} className="d-flex flex-column align-items-center">
                        <Image
                            src={image.src}
                            style={{ width: "80px", height: "80px", objectFit: "cover" }}
                            roundedCircle />

                        <p className="mt-2 text-center" style={{ fontWeight: "500" }}>
                            {image.title}
                        </p>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}