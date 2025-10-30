import '../index.css'
import './card.css'

type CardProps = {
    title: string;
    titleStyle?: string;
    content: string;
    imageSrc?: string;
    children?: React.ReactNode; 
}

function WideCard({title, titleStyle="", content, imageSrc="", children}: CardProps) {
  let elements: React.ReactElement[] = [];
  let contentArray: React.ReactElement[] = [];
  let temp: String[] = content.split("\\n")
  for(let i = 0; i < temp.length; i++){
    contentArray.push(<>{temp[i]}</>)
    if(i + 1 < temp.length){
      contentArray.push(<br key={"br" + i}></br>)
    }
  }

  if(imageSrc == ""){elements.push(
      <div key="full-width-header" style={{ width: "100%" }}>
        <h1 className={titleStyle}>{title}</h1>
        <p className="wideCardContent">{contentArray}</p>
      </div>
    );
  } else {
    elements.push(
      <div key="part-width-header" style={{ width: "75%",  margin: "0", display: "grid"}}>
        <h1 className={titleStyle}>{title}</h1>
        <p className="wideCardContent">{contentArray}</p>
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
            {children}
        </div>
    )
}

export default WideCard;