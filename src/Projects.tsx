import './App.css';
import Card from './Card/Card.tsx';
// import Background from './Background/Background.tsx';

function App() {
  return(
    <>
    {/* <Background></Background> */}
      <div className="cardContainer">
        <Card title="Project 1" content="Description"></Card>
        <Card title="Project 2" content="Description" tags={["HTML", "CSS", "JavaScript"]}></Card>
        <Card title="Project 3" content="Description"></Card>
      </div>
    </>
  )
}

export default App;
