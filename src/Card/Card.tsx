import '../index.css'
import './card.css'
import TagRow from '../TagRow/TagRow.tsx'

type CardProps = {
    title: string;
    content: string;
    tags?: string[];
}

function Card({title, content, tags=[]}: CardProps) {
    return(
        <div className="card">
            <h2>{title}</h2>
            <TagRow tags={tags}></TagRow>
            <p>{content}</p>
            
        </div>
    )
}

export default Card;