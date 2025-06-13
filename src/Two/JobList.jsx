import { useState } from "react";

const JobList = () => {
    return (
        <div className="w-[40rem] bg-white rounded-lg p-16">
            <div className="flex">
                <div className="relative border-2 border-gray-300 rounded-md grow">
                    <input
                        type="text"
                        className="w-full px-4 py-3 pl-10 mr-2"
                        placeholder="Search for a part-time job"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="absolute left-3 top-3.5 h-5 w-5 text-gray-400">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
                    />
                    </svg>                   
                    
                </div>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-500">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="inline w-6 h-6">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                    </svg>
                    Search
                </button>
            </div>            
        </div>
    );
};

export default JobList;