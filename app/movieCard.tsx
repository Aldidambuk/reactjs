"use client";

// Mengimpor library yang diperlukan
import { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

interface Movie {
  id: string;
  judul: string; // Properti judul bertipe string
  foto: string;
  rating: string;
  deskripsi: string;
}

// Menambahkan interface untuk tipe data respons dari API
interface MovieData {
  data: Movie[]; // Properti data bertipe array dari objek Movie
}

// Komponen MovieCard untuk menampilkan kartu film
const MovieCard = () => {
  // State untuk menyimpan data film
  const [movieData, setMovieData] = useState<MovieData | null>(null);

  // Fungsi untuk mendapatkan bintang berdasarkan rating
  const getStars = (rating:string) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className="star">
          {i <= parseInt(rating) ? '★' : '☆'}
        </span>
      );
    }
    return stars; // Mengembalikan elemen bintang
  };

  // Mengambil data film dari API saat komponen pertama kali dirender
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies');
        setMovieData(response.data); // Menyimpan data film di state
        console.log(response.data); // Logging data ke konsol
      } catch (error) {
        console.log('Error fetching data: ', error); // Menangani kesalahan
      }
    };

    fetchData(); // Memanggil fungsi fetchData
  }, []);

  // Fungsi untuk menghapus film berdasarkan ID
  const setDelete = async (id:string) => {
    try {
      await axios.delete('http://localhost:5000/api/movies/' + id);
      window.location.reload(); // Memuat ulang halaman setelah penghapusan
    } catch (error) {
      console.error('error delete data: ', error); // Menangani kesalahan penghapusan
      // handle error
    }
  };

  return (
    <div className="container bg-dark">
      <Navbar expand="lg" className="bg-secondary mb-4">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>

              <NavDropdown title="QUALITY" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">SD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">HD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">FULL HD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">2K </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">4K </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">8K</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="GENRE" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Comedy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Romance</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">All Genres</NavDropdown.Item>
              </NavDropdown>
              
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>

              <Col xs="auto">
                <Button type="submit" className="bg-dark">Submit</Button>
              </Col>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {movieData && (
        <div className="row">
          {movieData.data.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-2">
              <Card.Body className="h-100 bg-dark text-light">
                <Card.Img
                  variant="top"
                  src={movie.foto}
                  alt="Movie image"
                  style={{ height: '20rem', objectFit: 'cover' }}
                />
                <div className="d-flex justify-content-between mb-2 text-warning">
                  <Button as="a" variant="secondary" onClick={() => setDelete(movie.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </Button>
                </div>
                <div className="movie-info">
                  <div className="movie-title">{movie.judul}</div>
                  <div className="movie-deskripsi">{movie.deskripsi}</div>
                  <div className="movie-rating">
                    {getStars(movie.rating)}
                    <span>{movie.rating}</span>
                  </div>
                  <button className="watch-now-button">Watch now</button>
                </div>
              </Card.Body>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieCard; // Mengekspor komponen MovieCard