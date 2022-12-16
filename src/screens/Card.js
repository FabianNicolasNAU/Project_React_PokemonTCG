import React, {useState, useEffect} from "react";
import axios from "axios";
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
    <div className="bkgd">
      <div className="container">
        <div className="container-carousel">
            <div>
              <h3><img className="card-image" src={post.images.large}></img></h3>
            </div>
        </div>
      </div>

    </div>

  );
}
export default Card