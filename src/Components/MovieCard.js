import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function MovieCard({title,id,imgUrl,description}) {

    const navigate = useNavigate()
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imgUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Button onClick={()=> navigate(`/movie-details/${id}`)} variant="primary">See more</Button>
    </Card.Body>
  </Card>  )
}

export default MovieCard