
import './App.css';
import Card from './components/Card/Card';
import data from './data.json';
function App() {
  return (
    <div className="App">
     {data.map((card, index) => (
<Card
key={index}
price={card.price}
speed={card.speed}
color={card.color}
/>
))}
    </div>
  );
}

export default App;
