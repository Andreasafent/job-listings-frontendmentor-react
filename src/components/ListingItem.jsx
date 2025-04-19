import Languages from "./Languages";

function ListingItem({ company, logo, isNew, featured, position, role, level, postedAt, contract, location, languages }) {
    return (
        <section className={`w-full shadow-lg bg-white rounded-md border-[#5ba4a4] p-4 flex flex-col md:flex-row md:items-center md:justify-between md:p-6 ${featured && "border-l-6"}`}>
            <div className="mt-[-2.1rem] flex flex-col gap-2 border-b-1 border-[#7b8e8e] pb-4 md:flex-row md:border-b-0 md:items-center md:m-0 md:p-0 md:gap-4">
                <img className="w-10 h-10 md:w-15 md:h-15" src={logo} />
                <div className="flex flex-col gap-2 md:gap-0.5">
                    <div className="flex gap-3 items-center">
                        <h1 className="text-xs text-[#5ba4a4] font-bold">{company}</h1>
                        <div className="flex items-center ms-3 gap-2 flex-wrap">
                            {
                                isNew && (
                                    <p className="rounded-full bg-[#5ba4a4] text-xs text-white px-2 py-1 flex items-center font-bold">NEW!</p>
                                )
                            }
                            {
                                featured && (
                                    <p className="rounded-full bg-[#2c3a3a] text-xs text-white px-2 py-1 flex items-center font-bold">FEATURED</p>
                                )
                            }

                        </div>
                    </div>
                    <p className="font-bold text-xs md:text-base cursor-pointer hover:text-[#5ba4a4]">{position}</p>
                    <div className="flex gap-2 items-center">
                        <p className="text-xs text-[#7b8e8e]">{postedAt}</p>
                        <span className="text-xs text-[#7b8e8e]">•</span>
                        <p className="text-xs text-[#7b8e8e]">{contract}</p>
                        <span className="text-xs text-[#7b8e8e]">•</span>
                        <p className="text-xs text-[#7b8e8e]">{location}</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 pt-4 flex-wrap md:p-0">
                {languages.l}

                {
                    languages?.map((language) => (
                        <Languages
                            key={language}
                            language={language}
                        />
                    ))
                }
                
            </div>
        </section>
    )
}

export default ListingItem;