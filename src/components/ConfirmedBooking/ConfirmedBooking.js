import Header from '../Header'
import Footer from '../Footer/Footer'
import './confirmed.css'
import { useLocation } from 'react-router-dom'
import table from '../../img/table.jpg'

const ConfirmedBooking = () => {
    const location = useLocation();
    const { formData } = location.state || {};

    return(
        <>
        <Header/>
            <section className='confirmation'>
                <img className="table-pic" src={table}/> 
                <h1>Reservation Confirmed!</h1>
                <p>Thank you for choosing Little Lemon Restaurant. Your reservation details are as follows:</p>
                {formData ? (
                <ul style={{listStyle: 'none'}} >
                    <li>Occasion: {formData.occasion}</li>
                    <li>Guests: {formData.guest}</li>
                    <li>Date: {formData.date}</li>
                    <li>Time: {formData.time}</li>
                    {formData.additionalInfo && (
    <li>Additional info: {formData.additionalInfo}</li>
  )}
                </ul>
                ) : (
                <p>No data received</p>
                )}
            </section>
        <Footer/>
        </>
    )
}

export default ConfirmedBooking;