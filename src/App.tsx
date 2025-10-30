import './App.css';
import WideCard from './Card/WideCard.tsx';
// import Background from './Background/Background.tsx';

function App() {
  return(
    <>
    {/* <Background></Background> */}
      <WideCard title="Hi, I'm Kushagra!" titleStyle="page-header" imageSrc='profile-pic.png' content="I am a passionate student studying Computer Engineering at the University of Waterloo. This website was built entirely by me, and is updated when inspiration strikes. This site is all about me, my hobbies, my projects, etc. ">
      </WideCard>
      
      <WideCard title="My interests" content="I am in love with all things tech, from firmware to full-stack to databasing. Beyond tech, my hobbies are watching YouTube (a favourite of mine is Atlas Pro), hanging out with friends, biking, swimming, and board games.">
      </WideCard>
    </>
  )
}

export default App;
