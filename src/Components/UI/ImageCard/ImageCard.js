import './ImageCard.scss';

const ImageCard =props=>{
    const src = props.src || '';
    const text = props.text || 'Default';
    return (
        <div className={`image-card ${props.className}`}>
            <h2>{text}</h2>
            <img src={src} alt=''/>
        </div>
    )
}
export default ImageCard;