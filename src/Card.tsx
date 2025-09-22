import './index.css'
import TagRow from './TagRow'

type CardProps = {
    title: string;
    content: string;
    likes: number;
    tags?: string[];
}

function Card({title, content, likes, tags=[]}: CardProps) {
    return(
        <div className="card">
            <h2>{title}</h2>
            <TagRow tags={tags}></TagRow>
            <p>{content}</p>
            <p>❤️ {likes} likes</p>
            
        </div>
    )
}

export default Card;