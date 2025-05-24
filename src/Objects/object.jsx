import { MdLibraryBooks } from "react-icons/md";
import { GrDatabase } from "react-icons/gr";
import { IoAppsSharp } from "react-icons/io5";
import { IoIosAlert } from "react-icons/io";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { GrLogout } from "react-icons/gr";




const affiliates = {
    info : "Affiliates",
    icon : <MdLibraryBooks/>
}


const database = {
    info : "Database",
    icon : <GrDatabase/>
}

const apps = {
    info : "Apps",
    icon : <IoAppsSharp/>
}

const alerts = {
    info : "Alert",
    icon : <IoIosAlert/>
}

const Integrations = {
    info : "Alert",
    icon : <MdOutlineIntegrationInstructions/>
}

const logout = {
    info : "log out",
    icon : <GrLogout/>
}


// ----------------------
const cardinfo = {
    affiliates,database,apps,alerts,Integrations,logout
}

export default cardinfo;