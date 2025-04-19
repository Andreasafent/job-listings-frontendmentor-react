import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import './App.css'
import ListingItem from './components/ListingItem'
import FiltersComponent from './components/FiltersComponent'
import data from './data/data.json'

function App() {


    const isMobile = useMediaQuery({ query: '(max-width: 376px)' })

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

                {/* <FiltersComponent /> */}

                {
                    data.map((item) => (
                        <ListingItem
                            key={item.id}
                            company={item.company}
                            logo={item.logo}
                            isNew={item.new}
                            featured={item.featured}
                            position={item.position}
                            role={item.role}
                            level={item.level}
                            postedAt={item.postedAt}
                            contract={item.contract}
                            location={item.location}
                            languages={[...item.languages, ...item.tools]}
                            // tools={item.tools}
                        />
                    ))
                }
            </main>
        </>
    )
}

export default App
