import React from 'react'
import Header from '../compoent/Header'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Home() {
  return (
    <>
  <Header insideHome={true} />
  <Row className='container mt-5'>
    <Col  sm={12} md={6} lg={4}>

    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top"  src="https://m.media-amazon.com/images/I/81qHL1VCb+L.AC_UF1000,1000_QL80.jpg" />
      <Card.Body>
        <Card.Title className='text-center'>Rolex submariner</Card.Title>
        <Card.Text>
        
        </Card.Text>
        {/* <Button variant="primary" className='text-center'></Button> */}
      </Card.Body>
    </Card>
    </Col>
  </Row>
    </>
   
  )
}

export default Home