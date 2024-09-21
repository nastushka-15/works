import React from "react";
function Card({name, universe, alterego, occupation, friends, superpowers, url, info}) {
    return (
        <div className="card">
            <h2 className="name">{name}</h2>
            <img src={url} alt={name} className="card-image"></img>
            <p><strong>Вселенная:</strong> {universe}</p>
            <p><strong>Альтер эго:</strong>{alterego}</p>
            <p><strong>Род деятельности:</strong> {occupation}</p>
            <p><strong>Друзья:</strong> {friends}</p>
            <p><strong>Суперсилы:</strong> {superpowers}</p>
            <p><strong>Подробнее:</strong> {info}</p>
            
        </div>
    );
}
export default Card;