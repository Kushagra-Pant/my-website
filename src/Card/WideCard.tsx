import '../index.css'
import './card.css'

type CardProps = {
    title: string;
    content: string;
    imageSrc?: string;
}

function WideCard({title, content, imageSrc=""}: CardProps) {
  let elements: React.ReactElement[] = [];
  
  if(imageSrc == ""){elements.push(
      <div key="full-width-header" style={{ width: "100%" }}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  } else {
    elements.push(
      <div key="part-width-header" style={{ width: "75%",  margin: "0", display: "grid"}}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
    elements.push(
      <div key="part-width-image" style={{ width: "25%", maxWidth: "150px", minWidth: "100px", margin: "0", display: "grid", placeItems: "center", padding: "2%"}}>
        <img src={imageSrc} style={{ width: "100%" }} />
      </div>
    );
  }

  return(
        <div className="card widecard">
            <div style={{display: "inline-flex"}}>
              {elements}
            </div>
        </div>
    )
}

export default WideCard;