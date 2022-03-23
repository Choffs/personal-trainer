import ImageCard from "../ImageCard/ImageCard";
import './InfoCard.scss';

const InfoCard =props=>{
    const src = props.src || '';
    const imageTitle = props.imageTitle || 'title';
    const title = props.title || 'title';
    const infoCardText = props.infoCardText || 'text';

    return (
        <div className={`info-card ${props.className}`}>
            {(src.length > 0) && <ImageCard src={src} text={imageTitle}/>}
            <div className='info-card-text-container'>
                <h2 className='headerText'>{title}</h2>
                <p className='primaryText secondary'>{infoCardText}</p>
            </div>
        </div>)
}
export default InfoCard;