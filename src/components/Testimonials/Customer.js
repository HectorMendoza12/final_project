import './customers.css'
import rating from '../../img/stars.png'

const Customer = ({img, name, review}) => {
    return (
        <article className="customersay">
            <div className='customerinfo'>
                <div className="customerpic">
                    <img src={img} alt="customer-pic"/>
                </div>
                <div className='customerrating'>
                    <h4>{name}</h4>
                    <img src={rating} alt="stars-rating" width={90}/>
                </div>
            </div>
            <div className='customerreview'>
                <p>{review}</p>
            </div>
        </article>
    )
}

export default Customer;