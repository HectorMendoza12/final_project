import banner from '../../img/restaurant.jpg';
import Button from '../Button/Button'
import './hero.css';

const Hero = () => {
    return(
        <article className='hero'>
            <section className='text'>
                
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                Welcome to Little Lemon, where every dish tells a story. Nestled in the heart of Chicago, we blend fresh ingredients with bold flavors to create unforgettable dining experiences. Whether you're here for a casual meal or a special celebration, we promise to delight your senses with our unique twist on classic dishes. Join us for a taste of something extraordinary.
                </p>
                <Button text="Reserve a table" link="/booking" />
            </section>
            <section className='img'>
                <img src={banner} alt="banner" width={350}/>
            </section>
        </article>
    );
}

export default Hero;

