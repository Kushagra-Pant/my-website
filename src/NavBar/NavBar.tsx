import '../index.css'
import './navbar.css'

type NavBarProps = {
  items: Record<string, string>;
}

function NavBar({items}: NavBarProps) {
    let elements: React.ReactElement[] = [];
    for(const [label, link] of Object.entries(items)){
      elements.push(
        <div className="navButton" key={label}>
          <a href={link}>{label}</a>
        </div>
      )
    }
    return(
      <nav>
        {elements}
      </nav>
    )
}

export default NavBar;