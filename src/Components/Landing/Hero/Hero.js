import './Hero.scss';
import wave from '../../../assets/hero-wave.png';
import heroMain from '../../../assets/hero-main.avif';

const Hero = ()=>{
    return (
        <div className='hero'>
            <img src={heroMain} alt=''/>
            <img className='hero-wave'src={wave} alt=''/>
            <div className='hero-container'>
                <h2 className='text-light'>Let us Help you Reach Your Goals</h2>
                <button>Learn How</button>
            </div>
        </div>
    )
}
export default Hero;