import { useState } from "react";

const UserProfile = () => {
    return (
        <div className="flex w-[36rem] rounded-lg bg-white p-12 gap-x-4">
            <img
                src="https://placewaifu.com/image/200"
                className="rounded-full border-[11px] border-[#E6EFFA] self-start"
                alt=""
            />
            <div className="space-y-7">
                <div>
                    <h1 className="text-3xl font-bold text-[#1C2862]">David Grant</h1>
                    <h2 className="mt-1">3D Artist</h2>
                </div>               

                <div className="space-y-4">
                    <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24" 
                         strokeWidth={1.5} 
                         stroke="currentColor" 
                         className="inline-block w-6 h-6 mr-1"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" 
                            />
                        </svg>
                        4.7 Rating
                    </p>
                    <p className="flex items-center">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} stroke="currentColor" 
                            className="inline-block w-6 h-6 mr-1">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" 
                            />
                        </svg>
                        4,475 Reviews
                    </p>
                    <p className="flex items-center">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            trokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6 mr-1 sinline-block">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" 
                            />
                        </svg>
                        478 Students
                    </p>
                </div>

                <p className="text-lg">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                    "Không có ai muốn khổ đau cho chính mình, muốn tìm kiếm về nó và muốn có nó, bởi vì nó là sự đau khổ...
                </p>

                <button className="rounded-md p-2 border-2 border-[#C4CACF]">Show more</button>
            </div>
        </div>

    );
}

export default UserProfile;