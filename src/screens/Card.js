import React, {useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './Card.css';

function Card() {
  const [post, setPost] = useState(null)
  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/cards/ex12-2").then((response) => {
      setPost(response.data.data);
    });
  }, [])

  if(!post) return null

  return (
    <> 
      <div className="card-select-main">
        <div className={post.types[0]}>
          <div className="wraper">
            <div className="div-1">
              <div className="content-card"> 
                  <img className="card-select-image" src={post.images.small}/>
              </div>
            </div>
            <div className="div-2">
              <div className="content-card-info">
                <div className="card-info-title">
                  <span>{post.name}</span>
                </div>
                <div className="card-info-subtitle" style={{borderBottom:'1px solid black'}}>
                  <span>{post.supertype} - {post.subtypes.join(', ')}</span>
                </div>
                <div className="card-info-price" style={{borderBottom:'1px solid black', paddingTop:'1.2%'}}>
                  {post.tcgplayer ? (
                    <div className="card-info-price-tcgplayer">
                      <span>TCG-Player</span><br/>
                      {Object.keys(post.tcgplayer.prices).map((priceType) => (
                        <>
                          <span>{priceType}:</span>
                          <div className="card-info-price-tcgplayer-price">
                            {Object.keys(post.tcgplayer.prices[priceType]).map((price) => (
                              price !== 'directLow' ? (
                                <span>{price}: ${post.tcgplayer.prices[priceType][price]}</span>
                              ) : null
                            ))}
                          </div>
                        </>
                      ))}                  
                    </div>
                  ) : null}
                  {post.cardmarket ? (
                    <div className="card-info-price-cardmarket" style={{paddingTop:'1.5%'}}>
                      <span>Card Market</span>
                      <div className="card-info-price-cardmarket-price">
                        <span>Trend Price: ${post.cardmarket.prices.trendPrice}</span>
                        <span>1 Day Avegare: ${post.cardmarket.prices.avg1}</span>
                        <span>7 Day Avegare: ${post.cardmarket.prices.avg7}</span>
                        <span>30 Day Avegare: ${post.cardmarket.prices.avg30}</span>
                      </div>
                    </div>
                  ) : null}
                  <br/>
                </div>
                <br/>
                <div className="card-info-description">
                  <span>Artist</span>
                  <span>Rarity</span>
                  <span>Set</span>
                  <span>Number</span>
                  <span>{post.artist}</span>
                  <span>{post.rarity}</span>
                  <span>{post.set.name}</span>
                  <span>{post.number}/{post.set.printedTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>     
      </div>
    </>  
  );
}
export default Card

