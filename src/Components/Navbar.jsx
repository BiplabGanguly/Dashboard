import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";



function Navbar() {
    return (
        <>
            <div className="flex justify-between h-[65px] px-6 items-center">
                <div className="relative flex items-center">
                    <CiSearch className="absolute left-3 text-gray-400 text-2xl" />
                    <input
                        type="text"
                        placeholder="search projects, folders and files"
                        className="bg-[#F0F1F9] border-2 border-[#E8E8FF] outline-none text-[14px] w-70 h-10 rounded-2xl pl-10"
                    />
                </div>

                <ul className="flex gap-6 text-[14px]">
                    <li>Last Week</li>
                    <li>Last Month</li>
                    <li className="text-2xl"><IoIosNotificationsOutline/></li>
                    <li>IMG</li>
                </ul>

            </div>
        </>
    );
}

export default Navbar;