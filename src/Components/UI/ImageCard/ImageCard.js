import SVG from '../../svg/SVG';
import './ImageCard.scss';

const ImageCard =props=>{
    const src = props.src || '';
    const text = props.text || 'Default';
    const cardClick = (typeof props.onClick == 'function') ? props.onClick : null;
    return (
        <div onClick={cardClick} className={`image-card ${props.className}`}>
            <h2>{text}</h2>
            {(cardClick) && <span className='image-card-circle-arrow'><SVG>circle-arrow</SVG></span>}
            <img src={src} alt=''/>
        </div>
    )
}
export default ImageCard;