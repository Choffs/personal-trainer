import './Contact.scss';
import SVG from '../svg/SVG';

const Contact = ()=>{
    const submitForm = (event)=>{
        event.preventDefault();
        fetch('127.0.0.1:3000/data',{method: 'PUT', headers: {'content-Type' : 'application/json'},body: JSON.stringify({hello: 'world'})});
    }
    return <section className='contact'>
    <div className='contact-header'><span>Contact Us</span></div>
    <form className='contact-form d-flex flex-column' onSubmit={submitForm} method='put'>
        <input type="text" name="" id="" placeholder='Your Name'/>
        <input type="email" name="" id="" placeholder="Your Email" />
        <textarea name="" id="" cols="30" rows="10" placeholder='Describe what you hope to achieve sp we can set up a plan for you' ></textarea>
        <button type='submit'>Send</button>
    </form>
    <div className="contact-footer">
        <span className="contact-card">
            <span>
                <h2>Call/Text Us</h2>
                <a href='tel: 888-888-8888'>888-888-8888</a>
                </span>
            
            <SVG>cell-phone</SVG></span>
        <span className="contact-card"><SVG>cell-phone</SVG></span>
    </div>
    </section>
}
export default Contact;