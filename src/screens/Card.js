import React, {useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Card() {
  const [post, setPost] = useState(null)
  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/cards/pl3-1").then((response) => {
      setPost(response.data.data);
    });
  }, [])

  if(!post) return null
  return (
    <div className="bkgdCard">
              <div>
              <img className="card-image" src={post.images.large} />
              <div className="card-info">
    <h3 className="card-name">Nombre de la carta: {post.name}</h3>
    <h3 className="card-supertype">Tipo del pokemon: {post.supertype}</h3>
    <h3 className="card-level">Nivel de la carta: {post.level}</h3>
    <h3 className="card-type">Tipo de la carta: {post.types}</h3>
              </div>
              </div>
    </div>
  );
}
export default Card

