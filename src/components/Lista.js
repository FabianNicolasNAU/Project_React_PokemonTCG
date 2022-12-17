import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';


function Lista (post) {
    if(!post) return null
    return (
        <div className="grid"> 
        {post && post.data.map((item) => (
            <a>
                <img className="card-image" src={item.images.small}></img>
            </a>
        ))}
        </div>
    );
}
export default Lista