'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button, Card, CardText } from "react-bootstrap";
import MovieCard from './movieCard';
import axios from 'axios';
import MovieForms from "./MovieForms";
import Image from "next/image";
import MovieSlide from "./MovieSlide";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">

          <h1 style={{ fontSize: "24px", color: "blue" }}>Home Movie List</h1>
          <h2 style={{ fontSize: "20px", color: "green" }}>Reginaldus Dambuk</h2>
          <h3 style={{ fontSize: "16px", color: "red" }}>Pemrograman Web 2023-2024</h3>

          <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary">
              tombol link primer
            </Button>
            <Button as="a" variant="success">
              tombol link sukses
            </Button>
          </Stack>
        </div>
      </div>
      <div className="row">
        <div className="m-auto">
          <div />
          <MovieForms />
          <div />
        </div>
      </div>
      <div className='bg-danger' >
        <MovieCard />
        <MovieSlide />
      </div>

      {/* <div className="row">
          <div className="col-md-4">
            <Card className='bg-transparant text-white text-center movieImage'>
              <img className="card-img-top"
                src="https://imgsrc.cineserie.com/2020/05/top-des-meilleurs-episodes-de-naruto-shippuden.jpg?ver=1"
                alt="card image cap" sizes="(max-width: 768px) 100vw, (max-widthL 1200px) 50vw, 33vw"></img>
                <div className='bg-dark p-2 m-1'>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>xmen days of future past</Card.Text>
                <CardText>bagus 3.8/4.0</CardText>
                </div>
            </Card>
          </div>

          <div className="col-md-4">
            <Card className='bg-transparant text-white text-center movieImage'>
              <img className="card-img-top"
                src="https://imgsrc.cineserie.com/2020/05/top-des-meilleurs-episodes-de-naruto-shippuden.jpg?ver=1"
                alt="card image cap" sizes="(max-width: 768px) 100vw, (max-widthL 1200px) 50vw, 33vw"></img>
                <div className='bg-dark p-2 m-1'>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>xmen days of future past</Card.Text>
                <CardText>bagus 3.8/4.0</CardText>
                </div>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className='bg-transparant text-white text-center movieImage'>
              <img className="card-img-top"
                src="https://imgsrc.cineserie.com/2020/05/top-des-meilleurs-episodes-de-naruto-shippuden.jpg?ver=1"
                alt="card image cap" sizes="(max-width: 768px) 100vw, (max-widthL 1200px) 50vw, 33vw"></img>
                <div className='bg-dark p-2 m-1'>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>xmen days of future past</Card.Text>
                <CardText>bagus 3.8/4.0</CardText>
                </div>
            </Card>
          </div>
      </div> */}
    </div>
  )
}; 