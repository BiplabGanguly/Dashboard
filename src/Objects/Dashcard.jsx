import { MdOutlineMonitor } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlineSchedule } from "react-icons/md";



const local = {
    icon : <MdOutlineMonitor/>,
    name : "Local name",
    info : "WINPQR-24"
}

const register = {
    icon : <FaRegPenToSquare/>,
    name : "Registered On",
    info : "2025-20-08"
}


const schedule = {
    icon : <RiCalendarScheduleLine/>,
    name : "Scheduled Assets",
    info : "131 (KOLKATA-3)"
}


const agent = {
    icon : <MdOutlineSchedule/>,
    name : "Agent",
    info : "v1.0.0.2"
}

export {local,register,schedule,agent};