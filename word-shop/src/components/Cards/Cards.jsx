import React from "react";
import '../Cards/Cards.css';
function Card({id, english, transcription, russian, tags, tags_json, boolean}) {
    return (
        <div className="card">
            <h3>{english}</h3>
            {/* <img src={url} alt={name} className="card-image"></img> */}
            <p> {transcription}</p>
            <div className="card__overlay">
                <h3>{russian}</h3>
            </div>
        </div>
    );
}
export default Card;