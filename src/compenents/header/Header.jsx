import './header.scss';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import vid from "../../Media/video.mp4";
 
const Header = () => {
  return (
    <div className="background-video">
      <video className="video" autoPlay muted loop>
        <source src={vid} type="video/mp4" />
      </video>
      <div className="gradient-overla"></div>
      <Container>
        <Row>
          <Col className="text-center">
            <h1>Weather 4U</h1>
            <h3>Discover the Power of Weather Insights</h3>
            <h5>Your Ultimate Destination for Accurate Forecasts, Real-Time Updates, and Expert Weather Analysis!</h5>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;