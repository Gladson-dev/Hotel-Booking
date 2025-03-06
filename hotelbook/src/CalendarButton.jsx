import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import "./index.css";

const CalendarButton = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selection, setSelection] = useState({
    startDate: null, 
    endDate: null,   
    key: "selection",
  });

  const today = new Date();
  const oneYearFromToday = new Date();
  oneYearFromToday.setFullYear(today.getFullYear() + 1);

  const handleDateChange = (ranges) => {
    setSelection({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    });
  };

  const calendarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setShowCalendar((prev) => !prev);
  };

  return (
    <div className="calendar">
      <button onClick={handleButtonClick} className="button-calendar">
        📅{" "}
        {selection.startDate && selection.endDate
          ? `${format(selection.startDate, "dd MMM yy")} - ${format(
              selection.endDate,
              "dd MMM yy"
            )}`
          : "Check-in -- Check-out"}
      </button>
      {showCalendar && (
        <div className="Calendar-pop-up" ref={calendarRef}>
          <DateRange
            editableDateInputs={true}
            onChange={handleDateChange}
            moveRangeOnFirstSelection={false}
            ranges={[
              {
                startDate: selection.startDate || today,
                endDate: selection.endDate || today,
                key: "selection",
              },
            ]}
            rangeColors={["#007bff"]}
            minDate={today}
            maxDate={oneYearFromToday}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarButton;
