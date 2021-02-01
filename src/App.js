import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Course from './components/Course/Course';
import data from './data/data.json'
import Header from './components/Header/Header';
function App() {
  const [courses, setCourse] = useState(data)
  const [cart, setCart] = useState([])

  useEffect(() => {
    setCourse(data)
  }, [])

  const handelCart = (cartCourse) => {
    let newCart = [...cart, cartCourse]
    setCart(newCart)
  }

  let total = 0;
  for (const i of cart) {
    total += i.price
  }
  return (
    <>
      <Header cart={cart} />
      <Container>
        <Row className="main-row">
          <Col className="right-side" md={9}>
            <Row>
              {
                courses.map(course => <Course handelCart={handelCart} key={course.id} course={course}></Course>)
              }
            </Row>
            <Course></Course>
          </Col>
          <Col className="left-side" md={3}>
            <div className="side-bar">
              <h4>Total Courses: ({cart.length})</h4>
              <h6 className="h6">Total Price: ${total}</h6>
              <Button className='last' variant="primary" >
                Review Your Courses
                </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;