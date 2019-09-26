import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends React.Component {

  render() {

    return (
      <React.Fragment>
          <Container>
              <Row>
                  <Col sm={3}></Col>
                  <Col sm={6}>
                      <div style={{marginTop: '300px'}}>
                      <h1>Welcome To HomePage</h1>
                      </div>
                  </Col>
              </Row>
          </Container>
        
      </React.Fragment>
    );
  }
}

export default Home;
