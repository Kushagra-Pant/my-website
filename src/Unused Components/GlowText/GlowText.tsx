import './GlowText.css'

type param = {
    text: string;
}

function GlowText({text}: param){
    return(
        <span>{text}</span>
    )
}

export default GlowText;