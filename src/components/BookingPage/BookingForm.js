import './booking.css';
import { useState} from 'react';

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const defaultDate = `${yyyy}-${mm}-${dd}`;

    const [occasion, setOccasion] = useState('Casual');
    const [guest, setGuest] = useState(1);
    const [date, setDate] = useState(defaultDate);
    const [time, setTime] = useState('17:00');
    const [selectClass, setSelectClass] = useState('select-default');

    const handleOccasionChange = (e) => {
        const selectedValue = e.target.value;
        setOccasion(selectedValue);

        switch (selectedValue) {
            case 'Casual':
                setSelectClass('select-casual');
                break;
            case 'Birthday':
                setSelectClass('select-birthday');
                break;
            case 'Anniversary':
                setSelectClass('select-anniversary');
                break;
            default:
                setSelectClass('select-default');
                break;
        }
    };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
    
    const formData = {
            occasion,
            guest,
            date,
            time,
        };
    
        submitForm(formData);
      };

    return (
        <div className='form'>
            <h1 className='reserve-title'>Reserve a Table</h1> 
            <form className='form-section' onSubmit={handleSubmit}>
                <div className='guests'>
                    <label htmlFor='guests'>Number of guests *</label> <span>10 maximum</span>
                    <input id="guests" value={guest} type="number" defaultValue="1" min="1" max="10" onChange={e => setGuest(e.target.value)}></input>
                </div>
                <div className='date'>
                    <label htmlFor='date'>Date *</label>
                    <input type="date" id="date" value={date} defaultValue={defaultDate} onChange={handleDateChange}></input>
                </div>
                <div className='time'>
                    <label htmlFor='time'>Time *</label>
                    <select id="time" defaultValue="17:00" value={time} onChange={e => setTime(e.target.value)}>
                    {availableTimes.times.map((time, index) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                        ))}
                    </select>
                </div>
                <div className='occasion'>
                    <label htmlFor='occasion'>Occasion *</label>
                    <select id="occasion" className={selectClass} value={occasion} onChange={handleOccasionChange}>
                        <option value="Casual">Casual</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>
                <button className="btnsubmit" type="submit">Reserve</button>
            </form>
        </div>
    );
};

export default BookingForm;