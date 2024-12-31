import './testimonials.css';
import Customer from './Customer'

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>Testimonials</h2>
            <div className="customers">
                <Customer 
                img="https://this-person-does-not-exist.com/img/avatar-gen801145fd4b86b0ecfe1dee02d3f1f1b2.jpg" 
                name="Ethan"
                review="The food was absolutely incredible! I tried their signature pasta dish, and it was full of flavor. The service was quick and friendly, and the ambiance made for a perfect evening. Definitely coming back soon!"></Customer>
                <Customer 
                img="https://this-person-does-not-exist.com/img/avatar-gen366e96d46f3e6e8ce732dd10da5748b7.jpg" 
                name="Luis"
                review="Great place for a family dinner. The portions were generous, and the desserts were fantastic. I would definitely recommend it to anyone looking for a great dining experience. The ambiance is perfect, and the staff was wonderful."></Customer>
                <Customer img="https://this-person-does-not-exist.com/img/avatar-gen648c05f4c576887e2b1b626de498a12b.jpg"
                name="Olivia"
                review="This restaurant is a hidden gem! The staff was so attentive and made sure we had everything we needed. I loved the fresh ingredients in every dish. It’s now my go-to spot for special occasions."></Customer>
                <Customer 
                img="https://this-person-does-not-exist.com/img/avatar-gen4e1a0a1daffae1239fe54c59b1003ba4.jpg" 
                name="Jojo"
                review="I really enjoyed my dinner here. The cocktails were unique and delicious, and the atmosphere was cozy and inviting. The service was amazing, and the food was absolutely worth every penny. Will definitely return!"
                ></Customer>
            </div>
        </section>
    )
}

export default Testimonials;