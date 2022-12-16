import React, {useState, useEffect} from "react";
import logo from '../resources/Logo_PokemonTCG.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import '../App.css';

function Home() {
  const [data, setData] = useState(null)
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
       const request = await fetch('https://dummyjson.com/products');
       const response = await request.json();       
       setData(response);
     } catch (error) {
      console.error(error)
     }
  }

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

  return (
    <div className="bkgd">
      <div className="container">
        <img className="tcgicon" src={logo}/>
        <div className="container-carousel">
          <Slider {...settings}>
            <div>
              <h3><img className="card-image" src="https://images.pokemontcg.io/gym2/2.png"></img></h3>
            </div>
            <div>
              <h3><img className="card-image" src="https://images.pokemontcg.io/pop3/1.png"></img></h3>
            </div>
            <div>
              <h3><img className="card-image" src="https://images.pokemontcg.io/smp/SM167.png"></img></h3>
            </div>
            <div>
              <h3><img className="card-image" src="https://images.pokemontcg.io/gym2/2.png"></img></h3>
            </div>
            <div>
              <h3><img className="card-image" src="https://images.pokemontcg.io/pop3/1.png"></img></h3>
            </div>
            <div>
              <h3><img className="card-image" src="https://images.pokemontcg.io/smp/SM167.png"></img></h3>
            </div>            
          </Slider>
        </div>
        <h3>Cartas mas Valiosas:</h3>
        <div className="grid">          
          <a>
            <img className="card-image" src="https://images.pokemontcg.io/sm9/182.png"></img>
          </a>
          <a>
            <img className="card-image" src="https://images.pokemontcg.io/sm9/182.png"></img>
          </a>
          <a>
            <img className="card-image" src="https://images.pokemontcg.io/sm9/182.png"></img>
          </a>
          <a>
            <img className="card-image" src="https://images.pokemontcg.io/sm9/182.png"></img>
          </a>          
        </div>
      </div>
    </div>

  );
}
export default Home