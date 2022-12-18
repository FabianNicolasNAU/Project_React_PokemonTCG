import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {useNavigate} from 'react-router-dom';


function Lista (post) {
    const navigate = useNavigate();
    const [irCarta, setIrCarta] = useState(null)
    if(irCarta !== null){
        navigate('/Card', { state: { carta: irCarta} })
    }
    if(!post) return null
    return (
        <div className="grid"> 
        {post && post.data.map((item) => (
            <a>
                <img className="card-image" onClick={() =>setIrCarta(item.id)} src={item.images.small} style={{cursor:'pointer'}} ></img>
            </a>
        ))}
        </div>
    );
}
export default Lista