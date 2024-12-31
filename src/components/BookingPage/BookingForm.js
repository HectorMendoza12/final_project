import './booking.css';
import { useState, useEffect } from 'react';

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const defaultDate = `${yyyy}-${mm}-${dd}`;
    const [, forceUpdate] = useState();

    const [occasion, setOccasion] = useState('Casual');
    const [guest, setGuest] = useState(1);
    const [date, setDate] = useState(defaultDate);
    const [time, setTime] = useState('17:00');
    const [selectClass, setSelectClass] = useState('select-default');
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [errors, setErrors] = useState({});
    
    const validate = () => {
        let errors = {};
        if (!guest) {
            errors.guest = 'Number of guests is required';
          } else if (guest <= 0 || guest > 10) {
            errors.guest = 'Guests must be between 1 and 10';
          }


        if (!date) {
            errors.date = 'Date is required';
          }
         return errors;
    };

    useEffect(() => {
        forceUpdate(1);
      });

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

    const handleGuestsChange = (e) => {
        setGuest(e.target.value);
        const currentErrors = validate();
        setErrors(currentErrors);
      };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
        const currentErrors = validate();
        setErrors(currentErrors);
      };
      

      const handleKeyDown = (event) => {
        if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
        }
      };

    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        const formData = {
                occasion,
                guest,
                date,
                time,
                additionalInfo,
            };
        submitForm(formData)
        };

    return (
        <div className='form'>
            <h1 className='reserve-title'>Reserve a Table</h1> 
            <form className='form-section' onSubmit={handleSubmit}>
                <div className='guests'>
                    <label htmlFor='guests'>Number of guests *</label> <span>10 maximum</span>
                    <input id="guests" value={guest} type="number" min="1" max="10" required onChange={handleGuestsChange} onKeyDown={e => {e.preventDefault()}}></input>
                    {errors.guest && <p style={{ color: 'red' }}>{errors.guest}</p>}
                </div>
                <div className='date'>
                    <label htmlFor='date'>Date *</label>
                    <input type="date" id="date" value={date} required onChange={handleDateChange}></input>
                    {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}
                </div>
                <div className='time'>
                    <label htmlFor='time'>Time *</label>
                    <select id="time" value={time} onChange={e => setTime(e.target.value)}>
                    {availableTimes.times.map((time) => (
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
                <div class="additional-info">
                    <label htmlFor="additional-info">Additional Information (optional)</label>
                    <textarea 
                        id="additional-info" 
                        maxLength="300"
                        placeholder="E.g., wheelchair access needed, prefer a corner table, etc." 
                        rows="4"
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                    ></textarea>
                </div>
                <button aria-label="On Click" className="btnsubmit" type="submit">Reserve</button>
            </form>
        </div>
    );
};

export default BookingForm;