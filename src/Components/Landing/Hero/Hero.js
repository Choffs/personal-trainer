import './Hero.scss';
import wave from '../../../assets/hero-wave.png';
import heroMain from '../../../assets/hero-main.avif';

const Hero = ()=>{
    const learnHowClickHandler = ()=>{
        const section = document.getElementById('pillars-of-health-sec');
        
        window.scrollTo({left: 0,top: section.offsetHeight, behavior: 'smooth'});
    }
    return (
        <div className='hero p-rel d-flex'>
            <img src={heroMain} className='p-abs fs'alt=''/>
            <img className='hero-wave p-abs fs'src={wave} alt=''/>
            <div className='hero-container d-flex f-column f-center'>
                <h2 className='text-light'>Let us Help you Reach Your Goals</h2>
                <button onClick={learnHowClickHandler} >Learn How</button>
            </div>
        </div>
    )
}
export default Hero;