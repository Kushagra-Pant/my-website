import './Socials.css'

type SocialParams = {
    link: string;
    imageSrc: string;
}

function SocialButton({link, imageSrc}: SocialParams){
    return(
        <a href={link}>
            <button style={{backgroundImage: `url(${imageSrc})`}}></button>
        </a>
    )
}

export default SocialButton;