function FilterButton({ filter, filters,  setFilters }) {

    const removeFilter = ()=>{
        setFilters(filters.filter((item) => item !== filter))
    }


    return (
        <div className="flex rounded-md overflow-hidden bg-[#eef6f6] h-7">
            <span className="px-3 flex items-center">
                <p className="text-sm text-[#5ba4a4] font-bold">{filter}</p>
            </span>
            <button onClick={()=>removeFilter(filter)} className="w-7 h-7 bg-[#5ba4a4] flex items-center justify-center hover:bg-[#2c3a3a] cursor-pointer transition">
                <img src="./images/icon-remove.svg" alt="Remove" className="w-3 h-3" />
            </button>
        </div>
    )
}

export default FilterButton;