import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import './App.css'
import ListingItem from './components/ListingItem'
import FiltersComponent from './components/FiltersComponent'
import data from './data/data.json'

function App() {
    const [filters, setFilters] = useState(JSON.parse(localStorage.getItem("filters")) || [])
    const [filteredListings, setFilteredListings] = useState(data)

    useEffect(() => {
        localStorage.setItem("filters", JSON.stringify(filters));

        if (filters.length > 0){
            const filtered = data.filter(item=>{
                const allSkills = [item.level, item.role, ...item.languages, ...item.tools]
                return filters.every(filter => allSkills.includes(filter))
            })
            setFilteredListings(filtered)
        }else{
            setFilteredListings(data)
        }
    }, [filters])

    const isMobile = useMediaQuery({ query: '(max-width: 376px)' });

    return (
        <>
            <header className='bg-[#5ba4a4] h-full'>
                {
                    isMobile ? (
                        <img src="images/bg-header-mobile.svg" alt="" className="object-cover h-[156px]" />
                    ) : (
                        <img src="images/bg-header-desktop.svg" alt="" className="object-cover h-[156px] w-[100%]" />
                    )
                }

            </header>

            <main className="px-4 py-10 bg-[#effafa] flex flex-col gap-10 min-h-[75vh]">
                {
                    filters.length > 0 && (
                        <FiltersComponent
                            filters={filters}
                            setFilters={setFilters}
                        />
                    )
                }


                {
                    filteredListings.map((item) => (
                        <ListingItem
                            key={item.id}
                            company={item.company}
                            logo={item.logo}
                            isNew={item.new}
                            featured={item.featured}
                            details={[item.postedAt, item.contract, item.location]}
                            position={item.position}
                            skills={[item.level, item.role, ...item.languages, ...item.tools]}
                            filters={filters}
                            setFilters={setFilters}
                        />
                    ))
                }
            </main>
        </>
    )
}

export default App
