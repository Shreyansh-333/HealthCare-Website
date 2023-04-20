import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./searchBar.css";
// import img1 from "./image-2.jpg";

const SearchBar = () => {
  return (
    // <div className="banner" id="home">
    <Container className="search-container">
      <Row>
        <Col>
          <h1 className="heading">Find resources here!</h1>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col>
          <form className="form">
            <fieldset>
              <label>
                {" "}
                <input placeholder="Search" name="name" />
              </label>
            </fieldset>
          </form>
        </Col>
        <Col>
          <Button type="submit" variant="success">
            Submit{" "}
          </Button>
        </Col>
      </Row>
    </Container>
    // </div>
  );
};

export default SearchBar;
