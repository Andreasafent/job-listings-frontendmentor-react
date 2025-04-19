import FilterButton from "./FilterButton";

function FiltersComponent({ filters, setFilters }) {

    const clearAllFilters = () => {
        setFilters([])
    }

    return (
        <section className={`w-full flex justify-between items-center shadow-lg bg-white rounded-md py-4 px-5 md:px-10 mt-[-4rem] gap-6 `}>
            <div className='flex gap-5 flex-wrap'>
                {
                    filters.map(filter => (
                        <FilterButton
                            key={filter}
                            filter={filter}
                            filters={filters}
                            setFilters={setFilters}
                        />
                    ))
                }
            </div>
            <div>
                <button onClick={()=>clearAllFilters()} className="text-base text-[#7b8e8e] hover:underline hover:cursor-pointer">Clear</button>
            </div>
        </section>
    );
}

export default FiltersComponent;