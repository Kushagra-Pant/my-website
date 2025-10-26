import './App.css';
import Card from './Card/Card.tsx';
import WideCard from './Card/WideCard.tsx';
import NavBar from './NavBar/NavBar.tsx';
// import Background from './Background/Background.tsx';

function App() {
  return(
    <>
    {/* <Background></Background> */}
      <WideCard title="Hi, I'm Kushagra!" imageSrc='profile-pic.png' content="You've landed on my side of the web. Built by hand, updated when inspiration strikes. This website is all about me, my hobbies, my projects, etc. ">
      </WideCard>
      <div className="cardContainer">
        <Card title="Project 1" content="Description"></Card>
        <Card title="Project 2" content="Description" tags={["HTML", "CSS", "JavaScript"]}></Card>
        <Card title="Project 3" content="Description"></Card>
      </div>
    </>
  )
}

export default App;
