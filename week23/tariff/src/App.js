import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Card price={300} speed={10} color={'blue'}/>
      <Card price={450} speed={50} color={'green'}/>
      <Card price={550} speed={100} color={'red'}isHighlighted={true} />
      <Card price={1000}speed={200} color={'black'}/>
    </div>
  );
}

export default App;
