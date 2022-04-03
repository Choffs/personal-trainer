import SVG from "../../svg/SVG";
import './Footer.scss';

const Footer = ()=>{
    
    return <footer className='footer'>
        <div className="footer-main d-flex">
        <section>
            <h2>Our Certifications</h2>
            <ul className='secondary'>
                <li>Super Real Cert (SRT)</li>
                <li>Very Legit Trainer(VLT)</li>
            </ul>
        </section>
        <section>
            <h2>Where To Find Us</h2>
            <ul className='secondary'>
                <li>426 Address Street</li>
                <li>City, State, United States</li>
            </ul>
        </section>
        </div>
        <div className="footer-bottom">
            <h2>Follow Us</h2>
            <span className='share-bar'>
                <a href='https://facebook.com' target='_blank' rel='noreferrer'><SVG>facebook</SVG></a>
                <a href='https://twitter.com' target='_blank' rel='noreferrer'> <SVG>twitter</SVG></a>
                <a href='https://instagram.com' target='_blank' rel='noreferrer'> <SVG>instagram</SVG></a>
            </span>
        </div>
    </footer>
}
export default Footer;