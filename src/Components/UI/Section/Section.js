import './Section.scss';
import SVG from '../../svg/SVG';

const Section =props=>{
    const text = props.text || 'Default Text';
    const title = props.title || 'Default Title';

    return (
        <section className={`section ${props.className}`}>
            <div className='section-text-container'>
                <h2 className='header-text'>{title}</h2>
                <p className='primary-text'>{text}</p>
                <span className='section-arrow'>
                    <SVG>arrow</SVG>
                </span>
            </div>
        </section>
    )
}

export default Section;