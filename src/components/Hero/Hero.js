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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum mauris at hendrerit mattis. Vivamus est eros, bibendum a velit vel, tincidunt pharetra neque.
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

