import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function StoreListings() {
  return (
    <div>
      <h2>Browse stores in Houston</h2>
      <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Row md={4}>
            <Col sm>
              <Image
                style={{ height: "100px" }}
                src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png"
                roundedCircle
              />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row md={4}>
            <Col sm>
              <Image
                style={{ height: "100px" }}
                src="https://www.sprouts.com/wp-content/uploads/2020/03/sprouts-logo.png"
                roundedCircle
              />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row md={4}>
            <Col sm>
              <Image
                style={{ height: "100px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kroger_logo_%281961-2019%29.svg/2486px-Kroger_logo_%281961-2019%29.svg.png"
                roundedCircle
              />
            </Col>
            <Col sm>
              <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
              <p>Delivery</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default StoreListings;
