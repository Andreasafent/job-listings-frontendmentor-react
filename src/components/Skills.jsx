import { useEffect, useState } from "react";

function Skills({skill, filters, setFilters}) {

    const checkDuplicateFilters = ()=>{
        if(!filters.includes(skill)){
            setFilters([...filters, skill])
        }        
    }


    return (
        <button onClick={()=> {checkDuplicateFilters()}} className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold cursor-pointer hover:bg-[#5ba4a4] hover:text-[#eef6f6]">{skill}</button>
    )
}

export default Skills;