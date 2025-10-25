import './App.css';
import Card from './Card/Card.tsx';
import WideCard from './Card/WideCard.tsx';
// import Background from './Background/Background.tsx';

function App() {
  return(
    <>
    {/* <Background></Background> */}
      <WideCard title="Hi, I'm Kushagra!" imageSrc='/public/profile-pic.png' content="I am a passionate student currently studying Computer Engineer at the University of Waterloo.">
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
