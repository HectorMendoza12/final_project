import './customers.css'

const Customer = ({img, name, stars, review}) => {
    return (
        <article className="customersay">
            <div className='customerinfo'>
                <div className="customerpic">
                    <img src="https://thispersondoesnotexist.com/" alt="customer-pic"/>
                </div>
                <div className='customerrating'>
                    <h4>Hola</h4>
                    <p>Aqui van las estrellas</p>
                </div>
            </div>
            <div className='customerreview'>
                <p> JIJI</p>
            </div>
        </article>
    )
}

export default Customer;