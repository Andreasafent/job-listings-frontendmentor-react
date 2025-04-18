import { useState, useEffect } from 'react'
import './App.css'

function App() {

    return (
        <>
            <header className='bg-[#5ba4a4] h-full'>
                <img src="images/bg-header-mobile.svg" alt="" />
            </header>
            <main className="px-4 py-10 bg-[#effafa] flex flex-col gap-10">
                <div className="w-full shadow-lg bg-white rounded-md border-l-6 border-[#5ba4a4] p-4 flex flex-col">
                    <div className="mt-[-2.1rem] flex flex-col gap-2 border-b-1 border-[#7b8e8e] pb-4">
                        <img className="w-10 h-10" src="./images/photosnap.svg" />
                        <div className="flex gap-3 items-center">
                            <h1 className="text-xs text-[#5ba4a4] font-bold">Photosnap</h1>
                            <div className="flex items-center ms-3 gap-2">
                                <p className="rounded-full bg-[#5ba4a4] text-xs text-white px-2 py-1 flex items-center font-bold">NEW!</p>
                                <p className="rounded-full bg-[#2c3a3a] text-xs text-white px-2 py-1 flex items-center font-bold">FEATURED</p>

                            </div>
                        </div>
                        <p className="font-bold text-xs">Senior Frontend Developer</p>
                        <div className="flex gap-2 items-center">
                            <p className="text-xs text-[#7b8e8e]">1d ago</p>
                            <span className="text-xs text-[#7b8e8e]">•</span>
                            <p className="text-xs text-[#7b8e8e]">Full time</p>
                            <span className="text-xs text-[#7b8e8e]">•</span>
                            <p className="text-xs text-[#7b8e8e]">USA only</p>
                        </div>
                    </div>
                    <div className="flex gap-2 pt-4 flex-wrap">
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">Frontend</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">Senior</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">HTML</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">CSS</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">JavaScript</button>
                    </div>
                </div>
                <div className="w-full shadow-lg bg-white rounded-md border-l-6 border-[#5ba4a4] p-4 flex flex-col">
                    <div className="mt-[-2.1rem] flex flex-col gap-2 border-b-1 border-[#7b8e8e] pb-4">
                        <img className="w-10 h-10" src="./images/photosnap.svg" />
                        <div className="flex gap-3 items-center">
                            <h1 className="text-xs text-[#5ba4a4] font-bold">Photosnap</h1>
                            <div className="flex items-center ms-3 gap-2">
                                <p className="rounded-full bg-[#5ba4a4] text-xs text-white px-2 py-1 flex items-center font-bold">NEW!</p>
                                <p className="rounded-full bg-[#2c3a3a] text-xs text-white px-2 py-1 flex items-center font-bold">FEATURED</p>

                            </div>
                        </div>
                        <p className="font-bold text-xs">Senior Frontend Developer</p>
                        <div className="flex gap-2 items-center">
                            <p className="text-xs text-[#7b8e8e]">1d ago</p>
                            <span className="text-xs text-[#7b8e8e]">•</span>
                            <p className="text-xs text-[#7b8e8e]">Full time</p>
                            <span className="text-xs text-[#7b8e8e]">•</span>
                            <p className="text-xs text-[#7b8e8e]">USA only</p>
                        </div>
                    </div>
                    <div className="flex gap-2 pt-4 flex-wrap">
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">Frontend</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">Senior</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">HTML</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">CSS</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">JavaScript</button>
                    </div>
                </div>
                <div className="w-full shadow-lg bg-white rounded-md border-l-6 border-[#5ba4a4] p-4 flex flex-col">
                    <div className="mt-[-2.1rem] flex flex-col gap-2 border-b-1 border-[#7b8e8e] pb-4">
                        <img className="w-10 h-10" src="./images/photosnap.svg" />
                        <div className="flex gap-3 items-center">
                            <h1 className="text-xs text-[#5ba4a4] font-bold">Photosnap</h1>
                            <div className="flex items-center ms-3 gap-2">
                                <p className="rounded-full bg-[#5ba4a4] text-xs text-white px-2 py-1 flex items-center font-bold">NEW!</p>
                                <p className="rounded-full bg-[#2c3a3a] text-xs text-white px-2 py-1 flex items-center font-bold">FEATURED</p>

                            </div>
                        </div>
                        <p className="font-bold text-xs">Senior Frontend Developer</p>
                        <div className="flex gap-2 items-center">
                            <p className="text-xs text-[#7b8e8e]">1d ago</p>
                            <span className="text-xs text-[#7b8e8e]">•</span>
                            <p className="text-xs text-[#7b8e8e]">Full time</p>
                            <span className="text-xs text-[#7b8e8e]">•</span>
                            <p className="text-xs text-[#7b8e8e]">USA only</p>
                        </div>
                    </div>
                    <div className="flex gap-2 pt-4 flex-wrap">
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">Frontend</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">Senior</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">HTML</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">CSS</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">JavaScript</button>
                    </div>
                </div>
                <div className="w-full shadow-lg bg-white rounded-md border-l-6 border-[#5ba4a4] p-4 flex flex-col">
                    <div className="mt-[-2.1rem] flex flex-col gap-2 border-b-1 border-[#7b8e8e] pb-4">
                        <img className="w-10 h-10" src="./images/photosnap.svg" />
                        <div className="flex gap-3 items-center">
                            <h1 className="text-xs text-[#5ba4a4] font-bold">Photosnap</h1>
                            <div className="flex items-center ms-3 gap-2">
                                <p className="rounded-full bg-[#5ba4a4] text-xs text-white px-2 py-1 flex items-center font-bold">NEW!</p>
                                <p className="rounded-full bg-[#2c3a3a] text-xs text-white px-2 py-1 flex items-center font-bold">FEATURED</p>

                            </div>
                        </div>
                        <p className="font-bold text-xs">Senior Frontend Developer</p>
                        <div className="flex gap-2 items-center">
                            <p className="text-xs text-[#7b8e8e]">1d ago</p>
                            <span className="text-xs text-[#7b8e8e]">•</span>
                            <p className="text-xs text-[#7b8e8e]">Full time</p>
                            <span className="text-xs text-[#7b8e8e]">•</span>
                            <p className="text-xs text-[#7b8e8e]">USA only</p>
                        </div>
                    </div>
                    <div className="flex gap-2 pt-4 flex-wrap">
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">Frontend</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">Senior</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">HTML</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">CSS</button>
                        <button className="btn px-2 py-1 bg-[#5ba4a4]/10 rounded-sm text-[#5ba4a4] text-sm font-bold">JavaScript</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
