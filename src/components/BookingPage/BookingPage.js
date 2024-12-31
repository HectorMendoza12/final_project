import './booking.css';
import Header from '../Header'
import BookingForm from './BookingForm'
import Footer from '../Footer/Footer'
import { useReducer, useState } from 'react';
import { fetchAPI, submitAPI } from '../../api'
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return { ...state, times: fetchAPI(action.date) };
      default:
        return state;
    }
  };

  function initializeTimes() {
    const today = new Date();
    try {
      return { times: fetchAPI(today) }
    } catch (error) {
      console.error("Error fetching available times:", error);
      return [];
    }
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    
  const [bookings, setBookings] = useState([]);
  
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);

    if (isSuccess) {
      const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      const newBooking = { ...formData, id: Date.now() };
      const updatedBookings = [...existingBookings, newBooking];

      localStorage.setItem('bookings', JSON.stringify(updatedBookings));

      setBookings(updatedBookings);

      navigate('/booking-confirmation', { state: { formData } });
    } else {
      console.log('Booking failed.');
    }
  };

    return(
        <>
        <Header/>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        <Footer/>
        </>
    )
}

export default BookingPage;