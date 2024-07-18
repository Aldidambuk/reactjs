'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button, Card, CardText } from "react-bootstrap";
import MovieCard from './movieCard';
import axios from 'axios';
import MovieForms from "./MovieForms";
import Image from "next/image";
import MovieSlide from "./MovieSlide";
import { ButtonGroup, DropdownButton } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Home() {
  return (
    <div className="container">
      <div className="text-center">
        <div className="font-container mb-12">
          <h1 style={{ fontSize: "30px", color: "black" }}>PLANET MOVIE</h1>
          <h2 style={{ fontSize: "25px", color: "black" }}>ALDI BIOSKOP</h2>
        </div>
      </div>
      <br />
      <div className="row">
        {/* <div className="m-auto">
          <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="secondary">
              Form Input
            </Button>
          </Stack>
        </div> */}
        <div>
          <MovieForms />
          <div />
        </div>
      </div>
      <br />
      <div className='bg-danger' >
        <MovieCard />
      </div>
      <div className='bg-danger' >
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