import Graphcard from "../Cards/Graphcard";
import Monitorcard from "../Cards/Monitorcard";
import { local ,register,schedule,agent} from "../Objects/Dashcard";

function Dashbody() {
    return (
        <>
            <div className="bg-[#F0F1F9] h-[755px]">
                <div className="h-[220px] w-[56rem] flex gap-6 justify-center items-center">
                    <Monitorcard gradient="linear-gradient(to top, #7748FF, #A385FC)" info = {local} />
                    <Monitorcard gradient="linear-gradient(to top, #2E9F92, #86C5C0)" info = {register} />
                    <Monitorcard gradient="linear-gradient(to top, #FF9357, #F8C0A4)" info = {schedule} />
                    <Monitorcard gradient="linear-gradient(to top, #7ABD38, #B0D591)" info = {agent}/>
                </div>
                <div className="h-[62%] w-[56rem]">
                   <Graphcard/>
                </div>

            </div>
        </>
    );
}

export default Dashbody;