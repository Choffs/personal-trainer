import ImageCard from "../ImageCard/ImageCard";
import useIntersect from "../../../hooks/use-intersect";
import { useState, useRef } from 'react';
import './InfoCard.scss';

const InfoCard =props=>{

    const src = props.src || '';
    const imageTitle = props.imageTitle || 'title';
    const title = props.title || 'title';
    const infoCardText = props.infoCardText || 'text';
    const id = props.id;
    const infoCardRef = useRef();
    const [loadImageCard, setLoadImageCard] = useState(false);
    useIntersect(infoCardRef, ()=>setLoadImageCard(true));
    
    const clickCard =()=>{
        if(window.innerWidth <= 768){
            props.openSidebar(title,
                <div className='d-flex f-center '><p className='info-sidebar-text primary-text secondary text-light'>{infoCardText}</p></div>
            );
        }
    }

    return (
        <div ref={infoCardRef} id={id} className={`info-card d-flex ${props.className}`}>
            <div className='card-image-container f-2'>
            {(src.length > 0 && loadImageCard) && <ImageCard onClick={clickCard} className='scale' src={src} text={imageTitle}/>}
            </div>
            <div className='info-card-text-container d-flex f-center f-column f-3'>
                <h2 className='header-text'>{title}</h2>
                <p className='primary-text secondary'>{infoCardText}</p>
            </div>
        </div>)
}
export default InfoCard;