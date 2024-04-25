'use client'
import { useState } from 'react';
import { ScheduleMeeting } from 'react-schedule-meeting';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DatePicker = () => {
    const notify = () => toast("Slot booked succesfully");
    const [saveTime, setSaveTime] = useState(false)
    const saveSlotHandler = () => {
        if(true){
        }
    }
    const timeSelectHandler = () => {
        setSaveTime(true)
    }
    const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
        return {
          id,
          startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
          endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(21, 0, 0, 0)),
        };
      });
  return (
    <>
    <ScheduleMeeting
    borderRadius={10}
    primaryColor="#3f5b85"
    eventDurationInMinutes={60}
    availableTimeslots={availableTimeslots}
    onStartTimeSelect={timeSelectHandler}
  />
  {
    saveTime && (
        <button onClick={() => {notify(), saveSlotHandler()}} className="bg-blue-500 text-white py-2 px-4 rounded-md list-none float-right mr-4">Submit</button>
    )
  }
  <ToastContainer 
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  transition={Bounce}
  />
  </>
  )
}
export default DatePicker