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
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
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

  );
}
export default Home