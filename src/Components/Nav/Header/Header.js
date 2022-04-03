import './Header.scss';
import SVG from '../../svg/SVG';


const Header =(props)=>{
    const openSidebar = props.openSidebar || ((...args)=>{throw new Error('No Open Sidebar Function Found In Header Component')});
    
    const openNavMenu = ()=>{
        openSidebar('Personal Training',
        <ul className='mobile-links text-light'>
        <li className='link'>Services</li>
        <li className='link'>About Us</li> 
        <li className='link'>Testimonials</li> 
        </ul>
        );
    }

    return (
        <nav className='header'>
            <h2>Fitness Trainer</h2>
            <ul className='desktop-links text-light'>
               <li className='link'>Services</li>
               <li className='link'>About Us</li> 
               <li className='link'>Testimonials</li> 
            </ul>
            <div className='mobile-menu'>
            <span onClick={openNavMenu}><SVG>menu</SVG></span>
            </div>
        </nav>)
}

export default Header;