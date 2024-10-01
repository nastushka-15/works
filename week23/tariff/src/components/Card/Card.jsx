import React, {useState} from 'react';
import '../Card/Card.css';

function Card (props) {
const {price, color, speed}=props;
const [clicked, setClicked] = useState(props.clicked || false);
const handleChange = () =>{
    setClicked(!clicked)
}
return (
    <div className={`card ${clicked ? "highlighted" : ""}`} onClick={handleChange}>
        <div className={color}>
            <h4 className="card_header">Безлимитный {price}</h4>
            <h2 className="big">{price} <span className="normal">руб/мес</span></h2>
        </div>
        <p>до {speed} Мбит/сек</p>
        <div className="footer">
            <p>Объем включенного</p>
            <p>трафика не ограничен</p>
        </div>
    </div>
);
};
export default Card;
