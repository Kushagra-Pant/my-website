import '../index.css'
import './card.css'
import TagRow from '../TagRow/TagRow.tsx'

type CardProps = {
    title: string;
    content: string;
    date?: string;
    tags?: string[];
    link?: string;
}

function Card({title, content, date, tags=[], link}: CardProps) {
    return(
        <div className="card">
            <div className='fixed'>
                <div className="header">
                    <h2>{title}</h2>
                    <p className='date'>{date}</p>
                </div>
                <TagRow tags={tags}></TagRow>
            </div>
            <p>{content} <a href={link}>{link}</a> </p>
        </div>
    )
}

export default Card;