import React from 'react'
import Card from 'react-bootstrap/Card';

export const GifCard = ({ id, title, img }) => {

    return (
        <Card
            key={id}
            className="animate__animated animate__fadeIn"
            style={{ width: '18rem', height: '100%' }}>
            <Card.Img variant="top" src={img} height={200} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
