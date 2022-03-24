import ImageCard from "../ImageCard/ImageCard";
import './InfoCard.scss';

const InfoCard =props=>{
    const src = props.src || '';
    const imageTitle = props.imageTitle || 'title';
    const title = props.title || 'title';
    const infoCardText = props.infoCardText || 'text';
    const clickCard =()=>{
        if(window.screen.width <= 768){
            console.log('Small Screen')
        }
    }

    return (
        <div className={`info-card ${props.className}`}>
            <div className='card-image-container'>
            {(src.length > 0) && <ImageCard onClick={clickCard} className='scale' src={src} text={imageTitle}/>}
            </div>
            <div className='info-card-text-container flex-center'>
                <h2 className='header-text'>{title}</h2>
                <p className='primary-text secondary'>{infoCardText}</p>
            </div>
        </div>)
}
export default InfoCard;