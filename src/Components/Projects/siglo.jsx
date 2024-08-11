import siglo from "../../assets/siglo.jpg";
import { FaLink } from 'react-icons/fa'; // Asegúrate de instalar react-icons

export const Siglo = () => {
    return (
        <div className="relative group shadow-right rounded-[25px] border-2 border-celeste overflow-hidden">
            <img src={siglo} alt="Universidad Siglo 21" className="w-full h-auto" />
            <div className="absolute inset-0 bg-celeste opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
            <a 
                href="https://universidadsiglo21online.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
                <div className="flex items-center justify-center w-16 h-16  rounded-full shadow-lg border-2 border-celeste">
                    <FaLink className="text-celeste text-3xl" />
                </div>
            </a>
        </div>
    );
}

