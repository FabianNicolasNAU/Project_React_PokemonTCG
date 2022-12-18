import React, {useState, useEffect} from "react";
import logo from '../resources/Logo_PokemonTCG.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../App.css';
import Lista from "../components/Lista";
import Table from 'react-bootstrap/Table';
import {Navigate, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Home() {
  const navigate = useNavigate();

  const [nCarta, setNCarta] = useState("")

  const [boton, setBoton] = useState(false)
  
  const [post, setPost] = useState(null)
  useEffect(() => {(
    async () =>{
    axios.get("https://api.pokemontcg.io/v2/cards?orderBy=-tcgplayer.prices.holofoil.market&page=1&pageSize=35").then((response) => {
      setPost(response.data);
    });
  }
  )();
  }, [])

  const [alto, setAlto] = useState(null)
  useEffect(() => {(
    async () =>{
    axios.get("https://api.pokemontcg.io/v2/cards?orderBy=-tcgplayer.prices.1stEditionHolofoil.high&page=1&pageSize=12").then((response) => {
      setAlto(response.data.data);
    });

  }
  )();
  }, [])

  const [busca, setBusca] = useState("")

  const [busqueda, setBusqueda] = useState(null)
  useEffect(() => {(
    async () =>{
      if(busca !==""){
        axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${busca}*&page=1&pageSize=7`).then((response) => {
          setBusqueda(response.data.data);
      });
    }
    else{
      setBusqueda("")
    }
    
  }
  )();
    
  }, [busca])

  if(boton === true){
    localStorage.clear()
    return <Navigate to={"/Login"}/>
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  };
  if(nCarta!=""){
    navigate('/Card', { state: { carta: nCarta} });
  }
  /////// Valida si se tiene un token que coincide
  const token  =  "5d2272df-24bd-4cdc-a681-4c8ae7722c85";

  if(localStorage.getItem("auth")!== token){
    return <Navigate to={"/Login"}/>
  }


  if(!post) return null
  return (
    <>
      <div className="bkgd">
        <Navbar expand="lg" variant="light" bg="dark">
          <Container>
            <Navbar.Brand></Navbar.Brand>
            <Button variant="danger" onClick={() =>{setBoton(true)} } className="justify-content-end">Log Out</Button>
          </Container>
        </Navbar>
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '6vh'}}>
          <img className="tcgicon" src={logo}/>  
        </div> 
        <div className="main_search h-100">
          <div class="d-flex justify-content-center h-100" style={{paddingLeft:'5%'}}>
            <div class="search">
              <input class="search_input" type="text" name="" onChange={(event) => setBusca(event.target.value)} placeholder="Search here..."/>
              {/*<a href="#" class="search_icon"><i class="fa fa-search"></i></a>*/}
            </div>
            <img src="https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif" alt="Pikachu running" style={{width:'5%'}}/>
          </div>
        </div>
        <div class="d-flex justify-content-center">
            <div style={{position:'absolute', zIndex:'10'}}>
              <Table bordered hover size="sm" variant="dark" responsive="sm" style={{ cursor:'pointer'}}>
                <tbody>
                  {busqueda && busqueda.map((item) => (
                      <tr>
                        <td style={{width:'58vh'}} onClick={()=> {setNCarta(item.id)}}>{item.name} {item.rarity} ({item.id})</td>
                      </tr>                       
                    ))}
                </tbody>
              </Table>
            </div>
          </div>
          <div className="container-carousel" style={{zIndex:'-1'}}>
            <Slider {...settings}>
              {alto && alto.map((item) => (
                <div className="card-position">
                  <img className="card-image" src={item.images.small} alt="Pokemon Card" ></img>
                </div>
              ))}
            </Slider>
          </div>
          <div>
            <h3>Cartas mas Valiosas:</h3>    
            <Lista {...post}/> 
          </div>           
      </div>
    </>
  );
}
export default Home