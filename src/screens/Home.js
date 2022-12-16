import React, {useState, useEffect} from "react";
import logo from '../resources/Logo_PokemonTCG.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from "axios";
import '../App.css';

function Home() {
  const [post, setPost] = useState(null)
  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/cards").then((response) => {
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
        {post && post.map((item) => (
          <a>
<<<<<<< HEAD
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
=======
            <img className="card-image" src={item.images.large}></img>
          </a>
<<<<<<< HEAD
          ))}
=======
          
>>>>>>> 1811b293ee5550392384ca6974b15635ed00476e
>>>>>>> cbd2ca18d0fdf52ba88a2c7d7c0cc472ac4b6d94
        </div>
      </div>

    </div>

  );
}
export default Home