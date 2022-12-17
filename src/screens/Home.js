import React, {useState, useEffect} from "react";
import logo from '../resources/Logo_PokemonTCG.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../App.css';

function Home() {
  const [post, setPost] = useState(null)
  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/cards?pageSize=20").then((response) => {
      setPost(response.data.data);
    });
  }, [])
//  const getData = async () => {
//    try {
//       const request = await fetch('https://api.pokemontcg.io/v2/cards');
//       const response = await request.json();       
//       setData(response);
//     } catch (error) {
//      console.error(error)
//     }
//  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
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
  if(!post) return null
  return (
    <>
      <div className="bkgd">
        <nav>
          <button>
            Log Out
          </button>
        </nav> 
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '6vh'}}>
          <img className="tcgicon" src={logo}/>  
        </div> 
        <div className="main_search h-100">
          <div class="d-flex justify-content-center h-100" style={{paddingLeft:'5%'}}>
            <div class="search">
              <input class="search_input" type="text" name="" placeholder="Search here..."/>
              <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
            </div>
            <img src="https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif" alt="Pikachu running" style={{width:'5%'}}/>
          </div>
        </div>
        <div className="container">
          <div className="container-carousel">
            <Slider {...settings}>
              <div className="card-position">
                <img className="card-image" src="https://images.pokemontcg.io/gym2/2.png"></img>
              </div>
              <div className="card-position">
                <img className="card-image" src="https://images.pokemontcg.io/pop3/1.png"></img>
              </div>
              <div className="card-position">
                <img className="card-image" src="https://images.pokemontcg.io/smp/SM167.png"></img>
              </div>
              <div className="card-position">
                <img className="card-image" src="https://images.pokemontcg.io/gym2/2.png"></img>
              </div>
              <div className="card-position">
                <img className="card-image" src="https://images.pokemontcg.io/pop3/1.png"></img>
              </div>
              <div className="card-position">
                <img className="card-image" src="https://images.pokemontcg.io/smp/SM167.png"></img>
              </div>
            </Slider>
          </div>
          <h3>Cartas mas Valiosas:</h3>
          <div className="grid">          
          {post && post.map((item) => (
            <a>
              <img className="card-image" src={item.images.large}></img>
            </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home