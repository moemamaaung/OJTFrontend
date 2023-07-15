import React, { useEffect } from "react";
import TimetableList from "./TimetableList";
import { useDispatch } from "react-redux";
import { fetchTime } from "../time/timeSlice";

const Timetable = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchTime());
  }, [dispatch]);

  return (
    <div>
      <TimetableList />
    </div>
  );
};

export default Timetable;
