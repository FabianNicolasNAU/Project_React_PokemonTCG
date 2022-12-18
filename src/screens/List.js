import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import Lista from "../components/Lista";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../App.css';
import BarraNav from "../components/BarraNav";

function List (){
    const {state} = useLocation();
    const { carta } = state;
    const [post, setPost] = useState(null)
    useEffect(() => {(
            async () =>{
            axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${carta}*`).then((response) => {
            setPost(response.data);
            });
        })();
    }, [])
    if(!post) return null
    return (
        <>
            <BarraNav />
            <div className="bkgd" style={{height: '100vh'}}> 
                <div style={{paddingTop:'2vh'}}> 
                    <h2 className="text-center">Resultados para {carta} </h2> 
                    <Lista {...post} />
                </div> 
            </div>  
        </>
    )   
}

export default List