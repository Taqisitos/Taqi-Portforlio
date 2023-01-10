import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Work.css';

// Ext Components
import Card from 'react-bootstrap/Card';

// Int Components
import findACar from "../assets/findacar.png";
import todoList from "../assets/eth-todo-list.png";
import malloc from "../assets/malloc.png";

function Work() {
    return (
        <div id="work">
            <div className='title'>My Work</div>
            <div className='work-grid'>
                <a className='item' href='https://www.findacarfor.me/' target="_blank" rel="noopener noreferrer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={findACar} className='card-img'/>
                        <Card.Body>
                            <Card.Title>FindaCarFor.me</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a className='item' href='https://www.linkedin.com/in/taqi-hossain/' target="_blank" rel="noopener noreferrer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={todoList} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Ethereum To-do List</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a className='item' href='https://www.linkedin.com/in/taqi-hossain/' target="_blank" rel="noopener noreferrer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={malloc} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Malloc and Free</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </div>
        </div>
    );
}

export default Work;