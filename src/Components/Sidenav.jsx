import Gradientcard from "../Cards/Gradientcard";
import Largecard from "../Cards/Largecard";
import Navcard from "../Cards/Navcard";
import cardinfo from "../Objects/object";


const Sidenav = () => {
    return (
        <>
            <div className="border bg-[#1A1A22] w-80 h-[820px] flex justify-center">
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-3xl bg-gradient-to-t from-[#A8A8A6] to-white bg-clip-text text-transparent leading-[5rem] h-16">
                        Cyber<span className="text-3xl bg-gradient-to-t from-[#42ECFA] to-[#687DFF] bg-clip-text text-transparent leading-[5rem] h-16">X</span>
                    </h2>
                    <Gradientcard info="Home" />
                    <Navcard data={cardinfo.affiliates}/>
                    <Largecard />
                    <Navcard data={cardinfo.database} />
                    <Navcard data={cardinfo.apps} />
                    <Navcard data={cardinfo.alerts} />
                    <Navcard data={cardinfo.Integrations} />
                    <div className="mt-6">
                        <Navcard data={cardinfo.logout} />
                    </div>

                </div>

            </div>


        </>
    )
}

export default Sidenav;