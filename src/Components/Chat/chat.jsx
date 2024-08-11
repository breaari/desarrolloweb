// import { FaRocketchat } from "react-icons/fa";

// export const Chat = () => {
//     return (
//         <div className="fixed right-5 bottom-5 z-30 shadow-azuloscuro shadow-lg flex items-center justify-center bg-celeste rounded-[70px] p-5">
//             <FaRocketchat className="text-white text-4xl" />
//         </div>
//     )
// }


import React, { useState } from "react";
import { FaRocketchat } from "react-icons/fa";

export const Chat = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
            <a className={`fixed right-5 bottom-5 z-30 shadow-azuloscuro shadow-lg cursor-pointer rounded-[70px] bg-celeste p-5 flex items-center justify-evenly overflow-hidden transition-all duration-300 ${isHovered ? "hover:w-auto px-6" : ""}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href='https://api.whatsapp.com/send?phone=5492235512665&text=Hola%21%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%E2%80%A6'
                target="_blank"
                rel="noopener noreferrer"
            >
                {isHovered && (
                    <span className="text-blanco font-semibold mr-4 text-xl">Hablá con nosotros</span>
                )}
            <FaRocketchat className="text-white text-4xl" />
            </a>
            )
}
