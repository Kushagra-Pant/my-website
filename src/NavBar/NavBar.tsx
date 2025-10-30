import '../index.css'
import './navbar.css'

type NavBarProps = {
  items: Record<string, string>;
}

function NavBar({items}: NavBarProps) {
    let elements: React.ReactElement[] = [];
    for(const [label, link] of Object.entries(items)){
      elements.push(
        <a href={link} key={label}>
          <div className="navButton">
          {label}
          </div>
        </a>
      )
    }
    return(
      <nav>
        {elements}
      </nav>
    )
}

export default NavBar;