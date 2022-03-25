import './Hero.scss';
import wave from '../../../assets/hero-wave.png';
import heroMain from '../../../assets/hero-main.avif';

const Hero = ()=>{
    const learnHowClickHandler = ()=>{
        const section = document.getElementById('pillars-of-health-sec');
        
        window.scrollTo({left: 0,top: section.offsetHeight, behavior: 'smooth'});
    }
    return (
        <div className='hero'>
            <img src={heroMain} alt=''/>
            <img className='hero-wave'src={wave} alt=''/>
            <div className='hero-container'>
                <h2 className='text-light'>Let us Help you Reach Your Goals</h2>
                <button onClick={learnHowClickHandler} >Learn How</button>
            </div>
        </div>
    )
}
export default Hero;