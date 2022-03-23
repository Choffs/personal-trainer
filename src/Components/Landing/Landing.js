import Hero from "./Hero/Hero";
import ImageCard from "../UI/ImageCard/ImageCard";
import Section from "../UI/Section/Section";
import InfoCard from "../UI/InfoCard/InfoCard";


const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur morbi egestas dui urna, consectetur pellentesque. Eget cursus amet, quis posuere accumsan proin turpis potenti dignissim. Mauris mi senectus est vestibulum dignissim ultrices purus dictum. Nibh diam aliquet nec lorem faucibus quam odio lectus. Est, in duis in pellentesque posuere. Phasellus in adipiscing neque at ac nisl, rutrum massa quis. Velit mattis amet ac porttitor donec etiam eu, egestas phasellus. Purus, in leo, integer et sed justo, proin dolor eget. Tellus lorem hendrerit eu eleifend pellentesque pharetra, eu sed. Gravida risus mi nunc, massa lacinia fringilla. Orci fusce adipiscing morbi aliquam nunc, id. Convallis ipsum nisl tempus placerat viverra semper egestas ac tortor. Volutpat, nullam tortor nec nunc tellus sit. Arcu facilisi ut et sit.';
const Landing = ()=>{
    return (
        <div>
            <Hero />
            <Section className='dark-mode section flex-column flex-center' title='The Pillars of Health' text={lorem} />
            <div>

            <InfoCard className='dark-mode' 
            src='https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            imageTitle='Diet'
            title='Healthy Diet'
            infoCardText={lorem}
            />
            <InfoCard className='light-mode' 
            src='https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            imageTitle='Exercise'
            title='Exercise Routine'
            infoCardText={lorem}
            />
            <InfoCard className='dark-mode' 
            src='https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
            imageTitle='Lifestyle'
            title='Balanced Lifestyle'
            infoCardText={lorem}
            />

            </div>
             <Section className='light-mode section d-flex flex-column' title='Meet Our Highly Trained Staff' text={lorem} />
             <Section className='dark-mode section flex-column flex-center' title='The Pillars of Health' text={lorem} />
        </div>
    )
}
export default Landing;