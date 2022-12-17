import React, {useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './Card.css';

function Card() {
  const [post, setPost] = useState(null)
  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/cards/dp7-103").then((response) => {
      setPost(response.data.data);
    });
  }, [])

  if(!post) return null

  return (
    <> 
      <div className="card-select-main">
        <div class="wraper">
          <div class="div-1">
            <div class="content">
              <img className="card-select-image-display" src={post.images.large} style={{width: "70%", height: "80%"}}/>
            </div>
          </div>
          <div class="div-2">
            <div class="content">
              <h4>Carta: {post.name}</h4>
              <h4>Tipo del pokemon: {post.supertype}</h4>
              <h4>Nivel de la carta: {post.level}</h4>
              <h4>Tipo de la carta: {post.types}</h4>
              <h4>Precio: ${post.cardmarket.prices.avg1}</h4>
            </div>
          </div>
        </div>    
      </div>
    </>  
  );
}
export default Card

