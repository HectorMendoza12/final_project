import Card from './Card'
import './specials.css'
import grilledFish from '../../img/grilledfish.jpg';
import greekSalad from '../../img/greeksalad.jpg';
import brushetta from '../../img/brushetta.jpg';

const Specials = () => {
    return(
        <section style={{background: '#F4CE14'}} id="menu">
            <div className='specials'>
                <h3>Specials</h3>
                <button className="order-online">Online Menu </button>
            </div>
            <div className='cards' id="menu">
                <Card 
                title='Greek Salad' 
                price='12.99' 
                description='A vibrant mix of fresh cucumbers, juicy tomatoes, crisp red onions, and Kalamata olives, topped with a generous block of creamy feta cheese. Drizzled with extra virgin olive oil, sprinkled with oregano, and finished with a squeeze of lemon. A light, refreshing, and flavorful dish, perfect as a starter or a healthy side.' 
                img={greekSalad}/>
                <Card 
                title='Brushetta' 
                price='7.99' 
                description='A classic Italian appetizer featuring toasted slices of rustic bread, rubbed with garlic and drizzled with extra virgin olive oil. Topped with a vibrant mix of diced tomatoes, fresh basil, and a sprinkle of sea salt, this dish offers a perfect balance of flavors. Often garnished with balsamic glaze, mozzarella, or other fresh ingredients, bruschetta is a simple yet flavorful starter that captures the essence of Mediterranean cuisine.' 
                img={brushetta}/>
                <Card 
                title='Grilled Fish' 
                price='20.00' 
                description='A beautifully grilled fillet of fresh fish, perfectly seasoned and cooked to tender perfection. Served with a light drizzle of olive oil, a squeeze of lemon, and accompanied by your choice of sides, such as roasted vegetables or a crisp salad. This dish offers a delicate balance of smoky char and fresh, flaky fish, making it a healthy and flavorful choice for seafood lovers. Ideal for those seeking a light, yet satisfying meal that celebrates the natural flavors of the ocean.' 
                img={grilledFish}/>
            </div>
        </section>
    );
}

export default Specials;