import './App.css';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking/ConfirmedBooking';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/booking" element={<BookingPage/>}/>
      <Route path="/booking-confirmation" element={<ConfirmedBooking/>}/>
    </Routes>
    </>
  );
}

export default App;
