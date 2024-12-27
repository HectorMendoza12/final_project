import './card.css'

const Card = ({title, price, description, img}) => {
    return(
        <article className='card-content'>
            <img src={img} alt='food-img'></img>
            <div>
                <h2>{title}</h2>
                <p>${price}</p>
            </div>
            <p>{description}</p>
            <p className='orderdelivery' style={{fontSize: '20px', alignSelf: 'flex-end'}} >Order a delivery</p>
        </article>
    );
}

export default Card;