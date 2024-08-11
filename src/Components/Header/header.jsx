

import notebook from "../../assets/notebook.png";
import fondo from "../../assets/fondo.png";
import { FaArrowRight } from 'react-icons/fa'; // Importa el icono de flecha
import { FaLongArrowAltRight } from "react-icons/fa";

export const Header = () => {
    return (
        <div className="relative h-screen overflow-hidden mq980:h-full">
            {/* Imagen de fondo */}
            <img src={fondo} className="absolute top-0 left-0 w-full h-full object-cover z-[-2]" alt="Background" />

            {/* Fondo semitransparente */}
            <div className="absolute top-0 left-0 w-full h-full bg-azuloscuro opacity-50 z-[-1]"></div>
            <h2 className="absolute top-5 right-10 mq980:right-5 text-white font-semibold text-5xl z-10 mq980:text-4xl">Ariana Brea</h2>
            {/* Contenido */}
            <div className="relative bg-blanco rounded-tl-[75px] rounded-br-[75px] my-20 mx-10 flex flex-row z-10 mq980:flex-col mq980:mx-4 mq980:rounded-tl-[50px] mq980:rounded-br-[50px]">
                <div className="flex flex-col w-[50%] text-center items-end justify-center mq980:w-full mq980:items-center">
                    <div className="w-[80%] mq980:w-[90%] mq980:pt-8">
                        <h1 className="font-extrabold text-6xl text-azuloscuro mq980:text-[45px]">Construimos tu presencia online</h1>
                        <h2 className="font-bold text-3xl my-2 text-azuloscuro mq980:text-2xl">Desarrollo web personalizado para destacar en el mundo digital</h2>
                        <div className="mq980:hidden flex flex-row justify-center mq980:items-center space-x-2 my-4 mq980:flex-col mq980:space-x-0 mq980:space-y-2 ">
                            <a href="https://calendar.app.google/jt6xMpyG6N1Jnfdt5" target="_blank" rel="noopener noreferrer">
                                <button className="button_slide slide_right font-bold text-2xl mq980:text-xl text-celeste py-2 px-4 border-2 border-celeste hover:border-azuloscuro rounded-[50px] mq980:w-[80%] hover:scale-95">Agendá una reunión</button>
                            </a>
                            <a href="#services" className="relative group">
                                <button className="font-bold text-2xl mq980:text-xl bg-celeste text-blanco py-2 px-4 rounded-[50px] border-2 border-celeste mq980:w-[80%] flex items-center justify-center transition-all duration-300 ease-in-out overflow-hidden group-hover:pr-12 ">
                                    Descubrir más
                                    <FaLongArrowAltRight className=" absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 transform right-4 " />
                                </button>
                                
                            </a>
                        </div>
                        <div className=" hidden mq980:block font-bold text-xl flex flex-col items-center justify-center my-4">
                            <a href="https://calendar.app.google/jt6xMpyG6N1Jnfdt5" target="_blank" rel="noopener noreferrer">
                                <button className="w-[70%] text-celeste py-2 px-4 border-2 border-celeste hover:border-azuloscuro hover:bg-azuloscuro hover:text-white rounded-[50px] text-center hover:scale-95">Agendá una reunión</button>
                            </a>
                            <a href="#services" className="relative group">
                                <button className="w-[70%] bg-celeste text-blanco py-2 px-4 rounded-[50px] border-2 border-celeste  mt-2">
                                    Descubrir más
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] flex text-center items-center justify-start overflow-hidden mq980:w-full mq980:justify-center mq980:h-[225px] mq980:mb-8">
                    <img src={notebook} className="w-[85%] object-cover mq980:h-[300px] rounded-br-[100px]" alt="Notebook" />
                </div>
            </div>
        </div>
    );
};

// import notebook from "../../assets/notebook.png";
// import fondo from "../../assets/fondo.png";
// import { FaLongArrowAltRight } from "react-icons/fa";

// export const Header = () => {
//     return (
//         <div className="relative h-screen overflow-hidden mq980:h-full">
//             {/* Imagen de fondo */}
//             <img src={fondo} className="absolute top-0 left-0 w-full h-full object-cover z-[-2]" alt="Background" />

//             {/* Fondo semitransparente */}
//             <div className="absolute top-0 left-0 w-full h-full bg-azuloscuro opacity-50 z-[-1]"></div>
//             <h2 className="absolute top-5 right-10 mq980:right-5 text-white font-semibold text-5xl z-10 mq980:text-4xl">Ariana Brea</h2>
//             {/* Contenido */}
//             <div className="relative bg-blanco rounded-tl-[75px] rounded-br-[75px] my-20 mx-10 flex flex-row z-10 mq980:flex-col mq980:mx-4 mq980:rounded-tl-[50px] mq980:rounded-br-[50px]">
//                 <div className="flex flex-col w-[50%] text-center items-end justify-center mq980:w-full mq980:items-center">
//                     <div className="w-[80%] mq980:w-[90%] mq980:pt-8">
//                         <h1 className="font-extrabold text-6xl text-azuloscuro mq980:text-5xl">Construimos tu presencia online</h1>
//                         <h2 className="font-bold text-3xl my-2 text-azuloscuro mq980:text-2xl">Desarrollo web personalizado para destacar en el mundo digital</h2>
//                         <div className="mq980:flex flex-col items-center justify-center my-4 space-y-4">
//                             <a href="https://calendar.app.google/jt6xMpyG6N1Jnfdt5" target="_blank" rel="noopener noreferrer">
//                                 <button className="font-bold text-2xl mq980:text-xl text-celeste py-2 px-4 border-2 border-celeste hover:border-azuloscuro rounded-[50px] w-full text-center hover:scale-95">Agendá una reunión</button>
//                             </a>
//                             <a href="#services">
//                                 <button className="font-bold text-2xl mq980:text-xl bg-celeste text-blanco py-2 px-4 rounded-[50px] border-2 border-celeste flex items-center justify-center w-full transition-all duration-300 ease-in-out overflow-hidden group-hover:pr-12 mq980:hover:pr-4">
//                                     Descubrir más
//                                     <FaLongArrowAltRight className="mq980:hidden absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 right-4" />
//                                 </button>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-[50%] flex text-center items-center justify-start overflow-hidden mq980:w-full mq980:justify-center mq980:h-[225px] mq980:mb-8">
//                     <img src={notebook} className="w-[85%] object-cover mq980:h-[300px] rounded-br-[100px]" alt="Notebook" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// import notebook from "../../assets/notebook.png";
// import fondo from "../../assets/fondo.png";
// import { FaLongArrowAltRight } from "react-icons/fa";

// export const Header = () => {
//     return (
//         <div className="relative h-screen overflow-hidden mq980:h-full">
//             {/* Imagen de fondo */}
//             <img src={fondo} className="absolute top-0 left-0 w-full h-full object-cover z-[-2]" alt="Background" />

//             {/* Fondo semitransparente */}
//             <div className="absolute top-0 left-0 w-full h-full bg-azuloscuro opacity-50 z-[-1]"></div>
//             <h2 className="absolute top-5 right-10 mq980:right-5 text-white font-semibold text-5xl z-10 mq980:text-4xl">Ariana Brea</h2>
//             {/* Contenido */}
//             <div className="relative bg-blanco rounded-tl-[75px] rounded-br-[75px] my-20 mx-10 flex flex-row z-10 mq980:flex-col mq980:mx-4 mq980:rounded-tl-[50px] mq980:rounded-br-[50px]">
//                 <div className="flex flex-col w-[50%] text-center items-end justify-center mq980:w-full mq980:items-center">
//                     <div className="w-[80%] mq980:w-[90%] mq980:pt-8">
//                         <h1 className="font-extrabold text-6xl text-azuloscuro mq980:text-5xl">Construimos tu presencia online</h1>
//                         <h2 className="font-bold text-3xl my-2 text-azuloscuro mq980:text-2xl">Desarrollo web personalizado para destacar en el mundo digital</h2>
//                         <div className="mq980:flex flex-col items-center justify-center my-4 space-y-4">
//                             <a href="https://calendar.app.google/jt6xMpyG6N1Jnfdt5" target="_blank" rel="noopener noreferrer">
//                                 <button className="font-bold text-2xl mq980:text-xl text-celeste py-2 px-4 border-2 border-celeste hover:border-azuloscuro rounded-[50px] w-full text-center hover:scale-95">Agendá una reunión</button>
//                             </a>
//                             <a href="#services" className="relative group">
//                                 <button className="font-bold text-2xl mq980:text-xl bg-celeste text-blanco py-2 px-4 rounded-[50px] border-2 border-celeste flex items-center justify-center w-full transition-all duration-300 ease-in-out overflow-hidden group-hover:pr-12">
//                                     Descubrir más
//                                     <FaLongArrowAltRight className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 right-4" />
//                                 </button>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-[50%] flex text-center items-center justify-start overflow-hidden mq980:w-full mq980:justify-center mq980:h-[225px] mq980:mb-8">
//                     <img src={notebook} className="w-[85%] object-cover mq980:h-[300px] rounded-br-[100px]" alt="Notebook" />
//                 </div>
//             </div>
//         </div>
//     );
// };
