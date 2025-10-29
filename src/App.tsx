import './App.css';
import WideCard from './Card/WideCard.tsx';
// import Background from './Background/Background.tsx';

function App() {
  return(
    <>
    {/* <Background></Background> */}
      <WideCard title="Hi, I'm Kushagra!" imageSrc='profile-pic.png' content="You've landed on my side of the web. Built by hand, updated when inspiration strikes. This website is all about me, my hobbies, my projects, etc. ">
      </WideCard>
    </>
  )
}

export default App;
