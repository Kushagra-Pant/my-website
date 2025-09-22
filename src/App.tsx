import './App.css'
import Header from './Header.tsx'
import Card from './Card.tsx'

function App() {
  return(
    <>
      <Header></Header>
      <div className="cardContainer">
        <Card title="Project 1" content="Description" likes={67}></Card>
        <Card title="Project 2" content="Description" likes={42} tags={["HTML", "CSS", "JavaScript"]}></Card>
        <Card title="Project 3" content="Description" likes={1}></Card>
      </div>
    </>
  )
}

export default App;
