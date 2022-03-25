import ImageCard from "../ImageCard/ImageCard";
import './InfoCard.scss';

const InfoCard =props=>{
    const src = props.src || '';
    const imageTitle = props.imageTitle || 'title';
    const title = props.title || 'title';
    const infoCardText = props.infoCardText || 'text';
    const id = props.id;
    const clickCard =()=>{
        console.log(window.screen.width);
        if(window.innerWidth <= 768){
            console.log('info open sidebar')
            props.openSidebar(title,
                <p className='primary-text secondary'>{infoCardText}</p>
                );
        }
    }

    return (
        <div id={id} className={`info-card ${props.className}`}>
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