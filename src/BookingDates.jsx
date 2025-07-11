import {useState} from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { differenceInCalendarDays, format } from "date-fns";
import AddGuests from "./AddGuests";

const BookingDates = ({ booking, className }) => {
    const [guestInfo, setGuestInfo] = useState({
      adults: 1,
      children: 0,
      infants: 0,
    });
  return (
    <div className={"gap-1 " + className}>
      <div className="text-sm text-gray-700">
        {differenceInCalendarDays(
          new Date(booking.checkOut),
          new Date(booking.checkIn)
        )}{" "}
        <DarkModeOutlinedIcon /> nights <DateRangeOutlinedIcon />(
        {format(new Date(booking.checkIn), "yyyy-MM-dd")} →{" "} 
        {format(new Date(booking.checkOut), "yyyy-MM-dd")})
        
      </div>

      <div className="text-sm mt-1">
        <CreditCardIcon />
        Total price: <span className="font-semibold">${booking.price}</span>
      </div>
    </div>
  );
};

export default BookingDates;
