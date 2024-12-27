import './App.css';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage/BookingPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/booking" element={<BookingPage/>}/>
    </Routes>
    </>
  );
}

export default App;
