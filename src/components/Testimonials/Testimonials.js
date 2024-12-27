import './testimonials.css';
import Customer from './Customer'

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>Testimonials</h2>
            <div className="customers">
                <Customer></Customer>
                <Customer></Customer>
                <Customer></Customer>
                <Customer></Customer>
            </div>
        </section>
    )
}

export default Testimonials;