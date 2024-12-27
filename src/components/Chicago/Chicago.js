import './chicago.css';
import Chef1 from '../../img/chefs1.jpg'
import Chef2 from '../../img/chefs2.jpg'

const Chicago = () => {
    return(
        <article className='chicago'>
            <section className='info'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum mauris at hendrerit mattis. Vivamus est eros, bibendum a velit vel, tincidunt pharetra neque.
                </p>
            </section>
            <section className='imgs'>
                <div className='imgs1'>
                    <img src={Chef1} alt="banner"/>
                </div>
                <div className='imgs2'>
                    <img src={Chef2} alt="banner"/>
                </div>
            </section>
        </article>
    );
}

export default Chicago;