import React, { useState } from "react";
import { MoviesApi } from "../Data/MoviesApi";
import MovieCard from "./MovieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MovieList() {
  const [Movies, setMovies] = useState(MoviesApi);

  return (
    <div>
      <Container>
        <Row>
          {Movies.map((movie, index) => (
            <Col>
              <MovieCard
                key={index}
                id={movie.id}
                title={movie.title}
                description={movie.description}
                imgUrl={movie.imgUrl}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MovieList;
