import './chicago.css';
import Chef1 from '../../img/chefs1.jpg'
import Chef2 from '../../img/chefs2.jpg'

const Chicago = () => {
    return(
        <article className='chicago' id="aboutus">
            <section className='info'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                Little Lemon is a family-owned gem, founded by two passionate Italian brothers, Mario and Adrian. Born and raised in Italy, Mario and Adrian brought their love for authentic Italian cuisine to Chicago, infusing each dish with the warmth of their heritage. With a commitment to quality and a deep respect for tradition, Little Lemon is not just a place to eat, but a celebration of family, flavor, and unforgettable moments. Join us and experience the heart of Italy, right here in Chicago.
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