import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Work.css';

// Ext Components
import Card from 'react-bootstrap/Card';

function Work() {
    return (
        <div>
            <div className='title'>My Work</div>
            <div className='work-grid'>
                <div className='item'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../assets/me.png" />
                        <Card.Body>
                            <Card.Title>FindaCarFor.me</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='item'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../assets/me.png" />
                        <Card.Body>
                            <Card.Title>Ethereum To-do List</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='item'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../assets/me.png" />
                        <Card.Body>
                            <Card.Title>Guitar Keyboard</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Work;