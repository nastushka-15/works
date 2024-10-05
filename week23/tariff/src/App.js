
import './App.css';
import Card from './components/Card/Card';
import data from './data.json';
import {useState} from "react";
function App() {
  
  const [clicked, setClicked] = useState(null);
  const handleCardClick = (id) =>{
    setClicked(id)
  }
  return (
    <div className="App">
     {data.map((card, id) => (
<Card
key={id}
id={id}
price={card.price}
speed={card.speed}
color={card.color}
onClick={handleCardClick}
clicked={clicked===id}
/>
))}
    </div>
  );
}

export default App;
