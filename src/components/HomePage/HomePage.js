import React, { Component } from 'react';
import MyJumbo from './MyJumbo';
import { Container, Row, Col } from 'reactstrap';
class HomePage extends Component {
  render() {
    return (
      <div>
        <MyJumbo />
        {/* <Container>
          <Row>
            <Col md="6">.col</Col>
            <Col md="6">.col</Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}
export default HomePage;
