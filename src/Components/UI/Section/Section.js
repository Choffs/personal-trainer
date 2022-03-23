

const Section =props=>{
    const text = props.text || 'Default Text';
    const title = props.title || 'Default Title';

    return (
        <section className={`${props.className}`}>
            <div>
                <h2 className='header-text'>{title}</h2>
                <p className='primary-text'>{text}</p>
            </div>
        </section>
    )
}

export default Section;