import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NavBar from './NavBar/NavBar.tsx'

const navItems = {
  About: "/src/about",
  Projects: "/src/projects",
};

createRoot(document.getElementById('navbar')!).render(
  <StrictMode>
    <NavBar items={navItems}></NavBar>
  </StrictMode>,
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

let starContainer = document.getElementById('starContainer');
let count = window.innerWidth / 5;

if(starContainer != null){
  for (let i = 0; i < count; i++) {
      const star = document.createElement('div')
      star.classList.add('star')

      let size = Math.floor(Math.random() * 3) + 1
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.border = `${size / 2}px solid white`

      star.style.top = `${Math.random() * 97}vh`
      star.style.left = `${Math.random() * 97}vw`

      star.style.animationDelay = `${Math.random() * 2}s`

      starContainer.appendChild(star)
  }
}