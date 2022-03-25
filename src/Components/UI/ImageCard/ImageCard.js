import SVG from '../../svg/SVG';
import './ImageCard.scss';

const ImageCard =props=>{
    const src = props.src || '';
    const text = props.text || 'Default';
    const cardClick = (typeof props.onClick == 'function') ? props.onClick : null;
    return (
        <div onClick={cardClick} className={`image-card p-rel d-flex f-column f-center g-2 ${props.className}`}>
            <h2>{text}</h2>
            {(cardClick) && <span className='image-card-circle-arrow d-none text-light'><SVG>circle-arrow</SVG></span>}
            <img className='p-abs fs' src={src} alt=''/>
        </div>
    )
}
export default ImageCard;