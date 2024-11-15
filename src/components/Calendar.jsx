import React, { useState } from 'react';

import hamburgerIcon from '../assets/hamburger.png'
const Calendar = ({ SideBar }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = [6, 7, 8, 9, 10, 11, 12];

  // Define unique events for each date
  const eventsData = {
    6: [
      { time: '09:00 AM', title: 'Morning Standup', description: 'Daily team sync to discuss progress and blockers.' },
      { time: '11:00 AM', title: 'UI Design', description: 'Work on the main dashboard interface.' },
    ],
    7: [
      { time: '10:00 AM', title: 'Client Meeting', description: 'Discuss project scope and deliverables.' },
      { time: '03:00 PM', title: 'Design Review', description: 'Review new design prototypes with the team.' },
    ],
    8: [
      { time: '01:00 PM', title: 'Research', description: 'Gather inspiration and references for new design ideas.' },
      { time: '04:00 PM', title: 'Feedback Session', description: 'Get feedback from the team on the new designs.' },
    ],
    9: [
      { time: '09:30 AM', title: 'Sprint Planning', description: 'Plan the tasks for the upcoming sprint.' },
      { time: '02:00 PM', title: 'Wireframe Review', description: 'Discuss wireframes for the client project.' },
    ],
    10: [
      { time: '10:00 AM', title: 'Content Strategy', description: 'Outline content for the new website.' },
      { time: '01:30 PM', title: 'Lunch & Learn', description: 'Attend a workshop on UX writing.' },
    ],
    11: [
      { time: '09:00 AM', title: 'Meeting', description: 'Discuss team tasks for the day.', isMeeting: true },
      { time: '11:00 AM', title: 'Icon set', description: 'Edit icons for Navi \n Project.' },
      { time: '12:00 PM', title: 'Make prototypes', description: 'Make and send \n prototypes to the client.' },
      { time: '02:00 PM', title: 'Check work', description: 'Check out the work of \n the new junior designer.' },
      { time: '02:50 PM', title: 'Landing page', description: 'Start work on landing \n page Covid-19.' },
    ],
    12: [
      { time: '10:00 AM', title: 'Team Sync', description: 'Discuss project updates.' },
      { time: '01:00 PM', title: 'Design Review', description: 'Review the latest designs.' },
    ],
  };

  const [selectedDate, setSelectedDate] = useState(10); // Default date to show events for
  const events = eventsData[selectedDate] || [];

  // Determine the day of the week for the selected date
  const selectedDayIndex = (selectedDate - 6) % 7;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
    <div className='bg-gray-100'>
      <div className={`absolute z-40 rounded-full bg-white   top-3 text-3xl hover:cursor-pointer font-semibold text-red-500 right-4 px-3 py-1 flex items-center justify-center ${sidebarOpen ? "xl:hidden" : "hidden"
        }`} onClick={() => setSidebarOpen(!sidebarOpen)}>
        &times;
      </div>
      <SideBar sidebarOpen={sidebarOpen} />
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "md:ml-60" : "ml-0"
                        }`}>
      <header className="flex items-center justify-between p-2 md:p-3 space-y-3 sm:space-y-0">

        <div className="flex items-center justify-start lg:gap-4 gap-2  sm:w-auto">


          <img className={`md:h-7 md:w-7  h-5 w-5 mx-2 md:ms-2 md:me-7  hover:cursor-pointer ${sidebarOpen ? "lg:block hidden" : ""
            }`} onClick={() => setSidebarOpen(!sidebarOpen)} src={hamburgerIcon} />
          <p className="text-base sm:text-md  md:text-lg me-2 font-semibold text-gray-800">Calendar</p>
        </div>

    
        <div className="relative flex items-center space-x-3 mx-4">
  <div className=" flex flex-col justify-between gap-2 items-center">
    <span className="text-sm font-bold text-gray-800">Santhosh R</span>
    <p className="text-xs text-gray-500">UI/UX Designer</p>
  </div>
  <div className="relative group">
    <img
      src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
      alt="User Profile"
      className="md:w-8 md:h-8 h-6 cursor-pointer w-6 rounded-full"
    />
    {/* Tooltip */}
    <div className="absolute left-1  -translate-x-1/2 mt-2 hidden group-hover:flex flex-col items-center bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg">
  <p className="inline-block font-bold">Santhosh R</p>
  <p className="inline-block">UI/UX Designer</p>
</div>

  </div>
</div>

      </header>
      <div className="min-h-screen  flex items-center justify-center">
        <div className="bg-white mx-3 lg:mx-0 my-5 border rounded-lg shadow-lg p-6 max-w-md w-full">
          <main className="text-gray-600">
            <h2 className="text-xl font-semibold mb-2">October {selectedDate}, 2024</h2>
            <h3 className="text-2xl text-black font-semibold mb-6">Today</h3>

            {/* Days and Dates Header */}
            <div className="grid grid-cols-7 gap-2 text-center mb-3">
              {daysOfWeek.map((day, index) => (
                <div
                  key={index}
                  className={`cursor-pointer text-black font-semibold ${index === selectedDayIndex ? 'text-blue-500' : 'text-gray-500'
                    }`}
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center mb-6">
              {dates.map((date) => (
                <div
                  key={date}
                  className={`cursor-pointer text-black font-semibold ${date === selectedDate ? 'text-blue-500' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  {date}
                </div>
              ))}
            </div>

            {/* Events List */}
            <div className=" w-full space-y-4 relative">
              {/* Line for Timeline */}
              <div className="absolute inset-y-0 left-5 top-3 w-px bg-gray-300" />

              {events.map((event, index) => (
                <div key={index} className="relative  flex items-start pl-10 pr-4">
                  {/* Special layout for "Meeting" event */}
                  {event.isMeeting ? (
                    <>
                      <div className="absolute top-2 left-3 w-4 h-4 bg-slate-300 border-2 border-blue-700 rounded-full flex items-center justify-center" />

                      <div className="ml-5 py-4 pl-5 pr-48 bg-indigo-100 rounded-lg">
                        <h4 className="text-lg font-semibold text-wrap max-w-40">{event.title}</h4>
                        <p className="text-sm text-gray-500 text-wrap max-w-40">{event.description}</p>
                        <div className="flex items-center mt-4 -space-x-2">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBfQCpYOz2dl4tUXzeOdI-ZB_d4f_lzhFLA&s" alt="Avatar 1" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYR2v0pwofkDwd9y1bAHyTAxA1J9DGEMzYQ&s" alt="Avatar 2" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                          <img src="https://hips.hearstapps.com/hmg-prod/images/Emma-Watson_GettyImages-619546914.jpg" alt="Avatar 3" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                          <img src="https://cdn.vox-cdn.com/thumbor/URDKfrFaZRwc13MIQjso9PmQNZw=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25481462/2155658434.jpg" alt="Avatar 4" className="w-8 h-8 rounded-full border-2 border-yellow-300" />
                        </div>
                      </div>
                      <div className="absolute right-10 top-5 text-gray-600 ">{event.time}</div>
                      <div className="absolute right-10 bottom-4 hover:cursor-pointer rounded-2xl bg-white hover:bg-black hover:text-white">
                        <p className='text-lg text-extrabold px-5 py-3'>&#10004;</p></div>
                    </>
                  ) : (
                    // Default layout for other events

                    <div className="relative flex  w-full justify-between items-start pl-10 pr-8 py-2">
                      <div className="absolute top-3 -left-7 w-4 h-4 border-2 bg-white border-blue-700 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white border-2 border-blue-700 rounded-full" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-base font-semibold text-wrap max-w-40 ">{event.title}</h4>
                        <p className="text-sm text-gray-500 text-wrap max-w-40">{event.description}</p></div>
                      <div className="ml-auto  text-gray-600">{event.time}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div></div> 
      </div></div>
    </>
  );
};

export default Calendar;
