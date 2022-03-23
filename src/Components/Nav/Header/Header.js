import './Header.scss';
import SVGMenu from '../../svg/SVGMenu/SVGMenu';
import SVGCancel from '../../svg/SVGCancel/SVGCancel';
import {useState, useEffect} from 'react';
let transitionHandle = null;

const Header =()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [sideMenuTransitionClass, setSideMenuTransitionClass] = useState('closed');

    const toggleMenu =event=>{
        if(transitionHandle !== null){
            return;
        }
        if(!isMenuOpen){
            setSideMenuTransitionClass('opening')
            setIsMenuOpen(!isMenuOpen);
            transitionHandle = setTimeout(()=>{
                setSideMenuTransitionClass('');
                clearTimeout(transitionHandle);
                transitionHandle = null;
            }, 500);
        }
        else{
            setSideMenuTransitionClass('closing')
            transitionHandle = setTimeout(()=>{
                setSideMenuTransitionClass('closed');
                setIsMenuOpen((prev)=>!prev);
                clearTimeout(transitionHandle);
                transitionHandle = null;
            }, 600);
        }


    }
    useEffect(()=>{
        console.log(isMenuOpen);

    }, [isMenuOpen])

    return (
        <nav className='header'>
            <h2>Fitness Trainer</h2>
            <ul className='desktop-links text-light'>
               <li className='link'>Services</li>
               <li className='link'>About Us</li> 
               <li className='link'>Testimonials</li> 
            </ul>
            <div className={`mobile-menu ${sideMenuTransitionClass}`}>
                {(!isMenuOpen) && <span onClick={toggleMenu}><SVGMenu /></span>}
                <div className={`nav-side-menu  ${sideMenuTransitionClass}`}>
                    <div className="side-menu-head text-light">
                    <h2>Fitness Trainer</h2>
                    <span onClick={toggleMenu}><SVGCancel /></span>
                    </div>

                    <ul className='mobile-links text-light'>
                        <li className='link'>Services</li>
                        <li className='link'>About Us</li> 
                        <li className='link'>Testimonials</li> 
                    </ul>
                </div>
            </div>
        </nav>)
}

export default Header;