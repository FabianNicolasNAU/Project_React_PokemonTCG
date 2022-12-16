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
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container">
      <img class="tcgicon" src={logo}/>
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
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
export default Home