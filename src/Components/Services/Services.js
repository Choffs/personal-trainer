import './Serivces.scss';
import ImageCard from "../UI/ImageCard/ImageCard";

const SERVICES = [
    {
        imageTitle: 'Yoga',
        src: 'https://images.unsplash.com/photo-1526718583451-e88ebf774771?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        imageTitle: 'Personal Training',
        src: 'https://images.unsplash.com/photo-1591027480007-a42f6ef886c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        imageTitle: 'Private Yoga',
        src: 'https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        imageTitle: 'Fitness Training',
        src: 'https://images.unsplash.com/photo-1600881333161-35a5c046df33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
]
const Services = ()=>{
    const getCards = ()=>{
        return SERVICES.map((service, idx)=>{
            return <ImageCard key={idx} src={service.src} text={service.imageTitle} className='service-card scale'/>
        });
    }
    return (
        <div id='services-page' className="services">
            {getCards()}
        </div>
    )
}
export default Services;