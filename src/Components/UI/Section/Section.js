import './Section.scss';
import SVG from '../../svg/SVG';

const Section =props=>{
    const text = props.text || 'Default Text';
    const title = props.title || 'Default Title';
    const {jumpId, jumpFunc} = props.jumpTo || {jumpId: null, jumpFunc: null};
    const id = props.id;


    return (
        <section id={id} className={`section ${props.className}`}>
            <div className='section-text-container'>
                <h2 className='header-text'>{title}</h2>
                <p className='primary-text'>{text}</p>
                <span className='section-arrow' onClick={()=>{(jumpFunc) && jumpFunc(jumpId)}}>
                    <SVG>circle-arrow</SVG>
                </span>
            </div>
        </section>
    )
}

export default Section;