import { useState,useRef } from "react"
import Chart from '../assets/chart.png'
import Calendar from "./Calendar"
import hamburgerIcon from '../assets/hamburger.png'
const Dashboard = ({ sidebarOpen, setSidebarOpen }) => {
    // const [taskId,setTaskId]=useState(3);
    const [tasks, setTasks] = useState(['Create Wireframe', 'Slack Logo Design', 'Dashboard Design', 'Create Wireframe', 'App Icon Design']);
    const [taskId, setTaskId] = useState(null);
    const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0 });
    const cardRef = useRef(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [newTask, setNewTask] = useState('');
    const handleCardClick = () => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setCalendarPosition({
                top: rect.bottom + window.scrollY, 
            });
            setIsCalendarOpen(!isCalendarOpen);
        }};
    const addTask = () => {
        if (newTask !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
            console.log(newTask);

        }
        else {
            alert('enter the task');
        }
    };

    return (
        <>
            <div className="relative w-full">

                <div className={`absolute z-40 rounded-full bg-white   top-3 text-3xl hover:cursor-pointer font-semibold text-red-500 right-4 px-3 py-1 flex items-center justify-center ${sidebarOpen ? "xl:hidden" : "hidden"
                    }`} onClick={() => setSidebarOpen(!sidebarOpen)}>
                    &times;
                </div>
                <div className="content">
                    <main className={`flex-1 transition-all duration-200 ${sidebarOpen ? "xl:ml-60" : "ml-0"
                        }`}>
                        <header className="flex items-center justify-between p-2 md:p-3 space-y-3 sm:space-y-0">

                            <div className="flex items-center justify-start lg:gap-4 gap-2  sm:w-auto">


                                <img className={`md:h-7 md:w-7  h-5 w-5 mx-2 md:ms-2 md:me-7  hover:cursor-pointer ${sidebarOpen ? "lg:block hidden" : ""
                                    }`} onClick={() => setSidebarOpen(!sidebarOpen)} src={hamburgerIcon} />
                                <p className="text-base sm:text-md  md:text-lg me-2 font-semibold text-gray-800">Dashboard</p>
                            </div>

                            {/* Search input */}
                            <div className="">
                                <input
                                    type="text"
                                    placeholder="Search Project..."
                                    className="w-48 text-xs md:text-sm xl:text-md md:w-72 lg:w-96 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                                />
                            </div>

                            <div className="relative flex items-center space-x-3 mx-4">
                                <div className="hidden md:block flex flex-col justify-between gap-2 items-center">
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


                        <section className="flex  sm:flex-row ms-2 justify-between items-center p-6 bg-white space-y-4 sm:space-y-0">
                            <div className="px-4 py-2 rounded-md shadow-lg   bg-white border border-gray-300 text-center sm:text-left">
                                <p className="text-base sm:text-lg font-medium text-gray-800">Hello User,</p>
                                <p className="text-sm text-gray-600">Have a great day at work. Happy Working!!!</p>
                            </div>

                            <div className="flex justify-center sm:justify-end w-full sm:w-auto">
                                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg shadow-lg bg-white border border-gray-300 hover:bg-gray-100">
                                    <span className="text-sm font-medium text-gray-800">Start Time Tracker</span>
                                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4h2v6H9V4zM9 12h2v2H9v-2z" />
                                    </svg>
                                </button>
                            </div>
                        </section>


                        <div className="content  lg:grid lg:grid-cols-4 gap-2  p-2 w-full">
                            <div className="leftcontent sm:col-span-4 md:col-span-3">
                                <div className="card ms-5 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200">
                                        <div>
                                            <p className="text-sm text-gray-500">Today Hours</p>
                                            <p className="text-lg font-semibold text-gray-800">7:00:01</p>
                                        </div>
                                        <div className="p-2 bg-blue-100 rounded-full">
                                            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4h2v6H9V4zM9 12h2v2H9v-2z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200">
                                        <div>
                                            <p className="text-sm text-gray-500">Weekly Activity</p>
                                            <p className="text-lg font-semibold text-gray-800">0%</p>
                                        </div>
                                        <div className="p-2 bg-blue-100 rounded-full">
                                            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M2 12h2v8H2zm18-2h-6.31l.95-4.57c.15-.78-.34-1.43-1.11-1.43h-3.36c-.56 0-1.09.31-1.31.8L7.2 10.82c-.4.9.05 1.9 1.02 1.9h3.68l-.88 4.44a1.48 1.48 0 00.25 1.32l1.55 1.82c.46.54 1.2.54 1.67 0l3.74-4.42c.19-.22.29-.51.29-.8v-4a1.1 1.1 0 00-1.1-1.1z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200">
                                        <div>
                                            <p className="text-sm text-gray-500">Worked This Week</p>
                                            <p className="text-lg font-semibold text-gray-800">40:00:05</p>
                                        </div>
                                        <div className="p-2 bg-blue-100 rounded-full">
                                            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4h2v6H9V4zM9 12h2v2H9v-2z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="flex items-center me-4 justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200">
                                        <div>
                                            <p className="text-sm text-gray-500">Project Worked</p>
                                            <p className="text-lg font-semibold text-gray-800">02</p>
                                        </div>
                                        <div className="p-2 bg-blue-100 rounded-full">
                                            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 2H5a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-5l-1-1H5z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="projecttasks gap-5 p-2 grid sm:grid-cols-1 md:grid-cols-2">
                                    <div className="lefttask no-scrollbar">
                                        {/* Task List Section */}
                                        <div className="bg-white  h-auto p-6 pt-0 rounded-lg shadow-lg border border-grey-300 m-2 space-y-4">
                                            <div className="flex bg-white pt-6   justify-between items-center">
                                                <h2 className="text-xl font-semibold">My Tasks
                                                    <span className="text-gray-500 text-sm"> ({tasks.length})</span>
                                                </h2> <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="New task" className="bg-gray-100 border shadow-md text-gray-700 rounded-md w-48 h-8 px-2 mr-2" />
                                                <button onClick={addTask} className="bg-gray-200 text-gray-700 hover:scale-105 duration-150 hover:bg-green-100 rounded-full w-8 h-8 flex items-center justify-center text-lg"> + </button>
                                            </div>
                                            <div className="space-y-3"> {tasks.map((task, index) => (<div key={index} onClick={() => setTaskId(index)} className={`flex hover:cursor-pointer justify-between items-center p-3 hover:bg-green-100 rounded-lg ${index === taskId ? 'bg-green-50' : 'bg-gray-50'}`} >
                                                <span className="text-gray-500 font-medium text-wrap">{`0${index + 1} `}&nbsp;</span>
                                                <p className="flex-1 text-gray-700">{task}</p>
                                                <button className="text-gray-500 w-8 h-8 flex items-center justify-center">
                                                    <span className={`text-2xl ${index === taskId ? 'text-green-500' : 'text-gray-400'} hover:text-green-500`}>✓</span>
                                                </button> </div>))}
                                            </div> </div>

                                        {/* Projects Section */}
                                        <div className="bg-white h-auto  m-2 p-6 pt-0 rounded-lg shadow-lg border border-grey-300 space-y-4">
                                            <h2 className="text-xl bg-white pt-6 font-semibold text-wrap">Projects</h2>
                                            {['Project Four', 'Project Four', 'Project Four'].map((project, index) => (
                                                <div key={index} className="flex justify-between items-center space-y-4">
                                                    <p className="flex items-center space-x-2">
                                                        <span className="inline-block bg-blue-100 p-1 rounded-md text-blue-500">ߓ|</span>
                                                        <span>{project}</span>
                                                    </p>
                                                    <span className="text-gray-500 bg-green-200 px-4 py-1 rounded">00:30:00</span>
                                                    <div className="w-24 bg-gray-200 rounded-full h-2 overflow-hidden">
                                                        <div className="bg-green-500 h-full" style={{ width: '70%' }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Productivity Section */}
                                        <div className="bg-white h-auto w-auto p-6 pt-0 m-2 rounded-lg shadow-lg border border-grey-300">
                                            <div className="flex bg-white pt-6  justify-between items-center">
                                                <h2 className="text-xl font-semibold">Productivity</h2>
                                                <span className="text-gray-500 text-sm">21 hours 34 mins</span>
                                            </div>
                                            <div className="flex justify-around items-end h-40 mt-4">
                                                <div className="w-4 rounded bg-green-500 h-32"></div>
                                                <div className="w-4 rounded bg-purple-500 h-20"></div>
                                                <div className="w-4 rounded bg-gray-200 h-12"></div>
                                                <div className="w-4 rounded bg-gray-200 h-16"></div>
                                                <div className="w-4 rounded bg-gray-200 h-8"></div>
                                            </div>
                                            <div className="flex justify-between text-xs text-gray-600 mt-4">
                                                <span>Mon</span>
                                                <span>Tue</span>
                                                <span>Wed</span>
                                                <span>Thu</span>
                                                <span>Fri</span>
                                                <span>Sat</span>
                                                <span>Sun</span>
                                            </div>
                                        </div>

                                        {/* Messages Section */}
                                        <div className="bg-purple-50 h-auto  m-2 pt-0 p-6 rounded-lg shadow-lg border border-grey-300">
                                            <h2 className="text-xl  font-semibold  pt-6 pb-2 bg-purple-50">Messages</h2>
                                            {['User Name', 'John Doe', 'John Doe', 'John Doe'].map((name, index) => (
                                                <div key={index} className="flex items-center space-x-3 py-2">
                                                    <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 font-bold">
                                                        {name[0]}
                                                    </div>
                                                    <div className="text-sm">
                                                        <h4 className="font-semibold">{name}</h4>
                                                        <p className="text-gray-500">What's going on?</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="righttask no-scrollbar ">


                                        {/* Main Project Section */}
                                        <div className="bg-white  no-scrollbar h-auto m-2 p-6 pt-0 rounded-lg shadow-lg border border-grey-300">
                                            <div className=" bg-white pt-6  ">
                                                <div className="flex timer justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <span className="text-blue-500">⏰</span>
                                                        <h2 className="text-xl font-semibold">Timer</h2>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <p className="text-gray-500">25m 20s</p>
                                                        <button className="bg-gray-200 p-2 rounded-full text-gray-700">⏸</button>
                                                    </div>
                                                </div>
                                                <h2 className="text-xl font-semibold">Main Project</h2>
                                            </div>
                                            <div className="space-y-3 mt-4">
                                                {['Slack Logo Design', 'Dashboard Design', 'Create Wireframe', 'Create Wireframe', 'Create Wireframe', 'Create Wireframe'].map((task, index) => (
                                                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                        <div className="flex items-center space-x-3">
                                                            <span className="text-blue-500">ߓ¼</span>
                                                            <p>{task}</p>
                                                        </div>
                                                        <p className="text-gray-500">30m 0s</p>
                                                        <button className="text-gray-400">⋮</button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Upcoming Deadlines Section */}
                                        <div className="bg-white  h-auto pt-0 m-2 p-6 rounded-lg shadow-lg border border-grey-300">
                                            <h2 className="text-xl bg-white pt-6  font-semibold">Upcoming Deadlines</h2>
                                            <div className="space-y-3 mt-4">
                                                {['Project Four', 'Project Four', 'Project Four', 'Project Four'].map((project, index) => (
                                                    <div key={index} className="flex justify-between items-center">
                                                        <p className="flex items-center space-x-2">
                                                            <span className="inline-block bg-blue-100 p-2 rounded-md text-blue-500">ߓ|</span>
                                                            <span>{project}</span>
                                                        </p>
                                                        <span className="text-gray-500">00:30:00</span>
                                                        <div className="w-24 bg-gray-200 rounded-full h-2 overflow-hidden">
                                                            <div className="bg-pink-500 h-full" style={{ width: '30%' }}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Project Progress Section */}
                                        <div className="bg-white m-2 p-6 pt-0 rounded-lg shadow-lg border border-grey-300">
                                            <div className="flex bg-white pt-6 sticky top-0  justify-between items-center">
                                                <h2 className="text-xl font-semibold">Project 1</h2>
                                                <button className="text-gray-400">⋮</button>
                                            </div>
                                            <p className="text-gray-500 w-1/2 mt-2">Make a landing page and mobile app.</p>
                                            <div className="flex items-center space-x-2 mt-4">
                                                <div className="flex -space-x-2">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1JqrtrrxcyxfblD3A1j85H_Pw63EfIr0Hw&s" alt="User 1" className="w-8 h-8 rounded-full border-2 border-white" />
                                                    <img src="https://variety.com/wp-content/uploads/2024/08/GettyImages-2165000345.jpg?w=1000&h=667&crop=1" alt="User 2" className="w-8 h-8 rounded-full border-2 border-white" />
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrImDiOt2twOun3BPqhpRDsV3kkFNllRcccg&s" alt="User 3" className="w-8 h-8 rounded-full border-2 border-white" />
                                                </div>
                                                <p className="text-yellow-500 font-semibold">Progress</p>
                                                <span className="text-gray-500">35%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                                <div className="bg-yellow-500 h-full rounded-full" style={{ width: '35%' }}></div>
                                            </div>
                                        </div>

                                        {/* Assignments Section */}
                                        <div className="bg-white h-72 overflow-x-hidden m-2 p-6 pt-0 rounded-lg shadow-lg border border-grey-300">
                                            <div className=" bg-white pt-6 sticky top-0 ">
                                                <h2 className="text-xl font-semibold">Assignments <span className="text-gray-500">(12)</span></h2>
                                                <p className="text-gray-500 mt-2">2/5 completed</p>
                                            </div>
                                            <div className="space-y-4 mt-4">
                                                {[
                                                    { name: 'Colour Theory', score: '86/100', date: '01 Sep 2022' },
                                                    { name: 'Design System', score: '90/100', date: '01 Sep 2022' },
                                                    { name: 'User Persona', score: '0/100', date: 'To Do' }
                                                ].map((assignment, index) => (
                                                    <div key={index} className="flex items-center space-x-3">
                                                        <input type="checkbox" className="form-checkbox text-purple-500" checked={index < 2} readOnly />
                                                        <div className="flex-1">
                                                            <p className={`${index < 2 ? 'text-purple-500' : 'text-gray-500'} font-semibold`}>{assignment.name}</p>
                                                            <p className="text-xs text-gray-400">{assignment.date}</p>
                                                        </div>
                                                        <p className="text-gray-500">{assignment.score}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="rightcontent sm:col-span-4 md:col-span-1">
                                <div className="worktime m-1">
                                    <div className=" items-center gap-5 justify-between p-4 bg-white rounded-lg shadow-md border border-gray-300">
                                        <div className="bg-purple-200 cursor-pointer w-full flex justify-between rounded-md p-2"
                                               onClick={handleCardClick}
                                            ref={cardRef}>
                                            <div className=" w-full font-semibold">
                                                <p className="text-md text-gray-800">September</p>
                                                <p className="text-md font-semibold text-gray-800">23-10-2023</p>
                                            </div>
                                            <div className="p-2 bg-white  rounded-lg">
                                                <p className="text-blue-500 w-fit text-sm">Today's Task</p>
                                            </div>
                                        </div>
                                        <div className="progess text-slate-500">
                                            <div className="time">
                                                <div className="time1 m-1">
                                                    <p>09:00</p><hr />
                                                </div>
                                                <div className="time2 m-1 align-middle flex">
                                                    <p className="h-full my-auto">10:00</p>

                                                    <div className="border-2 border-blue-800 h-auto rounded ms-3 me-0"></div>
                                                    <div className="report border-2 py-2 px-1 w-full ms-0 mx-1 border-slate-300 h-auto rounded">
                                                        <p className="font-semibold text-black">
                                                            Work 1
                                                        </p>
                                                        <p className="text-center">
                                                            10.00am-12.00pm
                                                        </p>
                                                    </div>
                                                </div>


                                                <div className="time3 m-1 align-middle flex">
                                                    <p className="h-full my-auto">10:00</p>

                                                    <div className="border-2 border-blue-800 rounded h-auto ms-3 me-0"></div>
                                                    <div className="report border-2 py-2 px-1 w-full ms-0 mx-1 border-slate-300 h-auto rounded">
                                                        <p className="font-semibold text-black">
                                                            Work 1
                                                        </p>
                                                        <p className="text-center">
                                                            10.00am-12.00pm
                                                        </p>
                                                    </div>
                                                </div>

                                                <p>09:00</p><hr />
                                                <div className="time4"></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="Animation m-1 ">
                                    <div className=" items-center justify-between  p-4 pt-0 bg-white rounded-lg shadow-md border border-gray-300">
                                        <p className="font-bold text-center lg:text-start bg-white pt-4 ">Most Worked</p>
                                        <div className="flex justify-center">
                                            <img src={Chart} alt="" className="h-40  md:h-52 lg:h-60" />
                                        </div>
                                        <ul className="text-slate-500">
                                            <li className="relative text-gray-800 pl-5 mb-2">
                                                <span class="absolute h-full left-0 top-0 text-sky-500">&#8226;</span>
                                                Research
                                            </li>
                                            <li className="relative text-gray-800 pl-5 mb-2">
                                                <span class="absolute h-full left-0 top-0 text-yellow-500">&#8226;</span>
                                                Design
                                            </li>
                                            <li className="relative text-gray-800 pl-5 mb-2">
                                                <span class="absolute h-full left-0 top-0 text-teal-500">&#8226;</span>
                                                Animation
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </main>

                </div>
                <div className={`absolute lg:right-5 lg:top-16    z-50 ${isCalendarOpen ? "block" : "hidden"
                    }`}
                    style={{
                        ...(window.innerWidth < 640 && {
                            top: `${calendarPosition.top}px`,
                            right:'0px'
                        }),
                        ...(window.innerWidth >= 640 && window.innerWidth < 1024 && {
                            top: `${calendarPosition.top}px`, 
                            left: '50%',                     
                            transform: 'translateX(-50%)', 
                        }),
                    }}
                    
                    
                    >

                    <Calendar isCalendarOpen={isCalendarOpen} setIsCalendarOpen={setIsCalendarOpen} />
                </div>

            </div>


        </>
    )
}

export default Dashboard