function Navcard({data}) {
    return ( 
        <>
            <div className="h-[56px] w-[225px] border-2 border-[#32323D] rounded-2xl bg-[#23232B] text-white flex items-center pl-8 gap-4">
                {data.icon}
                {data.info}
            </div>
        </>
     );
}

export default Navcard;

