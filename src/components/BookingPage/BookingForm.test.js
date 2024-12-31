import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import BookingForm from "./BookingForm";
import { initializeTimes } from './BookingPage'

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Date *");
    expect(headingElement).toBeInTheDocument();
})

describe('initializeTimes', () => {
    it('should return the correct list of available times', () => {
      // Expected output
      const expectedTimes = [
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
      ];
  
      // Calling the initializeTimes function
      const result = initializeTimes();
  
      // Assert that the result matches the expected times
      expect(result).toEqual(expectedTimes);
    });
  });
