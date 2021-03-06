import './Hero.scss';

const Hero = ()=>{

    const learnHowClickHandler = ()=>{
        const section = document.getElementById('pillars-of-health-sec');
        window.scrollTo({left: 0,top: section.offsetHeight, behavior: 'smooth'});
    }
    
    return (
        <div className='hero p-rel d-flex f-center'>
            <picture>
            <source media="(max-width: 639px)" srcSet={'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80'}/>
                <source media="(min-width: 640px) and (max-width: 1279px)" srcSet={'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80'}/>
                <source media="(min-width: 1280px)" srcSet={'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80'}/>
                <img src={'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} className='p-abs fs' alt=''/>
            </picture>
           
            <div className='hero-container d-flex f-column f-center'>
                <h2 className='header-text head-to-primary text-light'>Let us Help you Reach Your Goals</h2>
                <button onClick={learnHowClickHandler} >Learn How</button>
            </div>
        </div>
    )
}
export default Hero;