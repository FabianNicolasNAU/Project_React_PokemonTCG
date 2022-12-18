import React, {useState, useEffect} from "react";
import axios from "axios";
import Lista from "../components/Lista";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../App.css';

function List (){

    const [post, setPost] = useState(null)
useEffect(() => {(
    async () =>{
    axios.get("https://api.pokemontcg.io/v2/cards?orderBy=-tcgplayer.prices.holofoil.market&page=1&pageSize=35").then((response) => {
    setPost(response.data);
    });
}
)();
}, [])


if(!post) return null
return (
    <>
    <div className="bkgd"> 
    <Lista {...post}/>
    </div>  
    </>
    )   
}


export default List