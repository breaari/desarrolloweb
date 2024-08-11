import React, { useState } from "react";
import { FaRocketchat } from "react-icons/fa";

export const Chat = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
            <a className={`fixed right-5 bottom-5 z-30 shadow-azuloscuro shadow-lg cursor-pointer rounded-[70px] bg-celeste p-5 flex items-center justify-evenly overflow-hidden transition-all duration-300 ${isHovered ? "hover:w-auto px-6" : ""}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href='https://api.whatsapp.com/send?phone=5491136002250'
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
