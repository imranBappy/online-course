import React, { useState } from 'react';
import "./course.css"
import { Card, Button, Col, Modal } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {

    let { name, img, title, description, rating, price, students } = props.course || {}
    let myR = rating || []
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Col md={6}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="title">{title}</Card.Title>
                    <Card.Text>
                        <p className="name">{name}</p>
                        <p className='info'>
                            <span class="rating">
                                {
                                    myR.map((i) => <FontAwesomeIcon icon={faStar} />)
                                }
                            </span>
                            &nbsp;
                            <span class="student" >({students})</span>
                        </p>
                        <strong className="price">${price}</strong>
                    </Card.Text>
                    <Button className="icon" onClick={() => props.handelCart(props.course)} variant="primary">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Button>
                    <Button className="icon" onClick={handleShow} variant="primary">
                        <FontAwesomeIcon icon={faEye} />
                    </Button>

                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>{description}</p>
                            <p className="name">{name}</p>
                            <p className='info'>
                                <span class="rating">
                                    {
                                        myR.map((i) => <FontAwesomeIcon icon={faStar} />)
                                    }
                                </span>
                            &nbsp;
                            <span class="student" >({students})</span>
                            </p>
                            <strong className="price">${price}</strong>
                        </Modal.Body>
                        <Modal.Footer >
                            <Button className='enrollBtn' variant="primary" onClick={handleClose}>
                                Enroll
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;