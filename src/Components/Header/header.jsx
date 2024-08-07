import notebook from "../../assets/notebook.png"
import fondo from "../../assets/fondo.png"

export const Header = () => {
//     return (
//         <div className="flex flex-row h-screen bg-azuloscuro opacity-20">
//             <img src= { fondo } className="absolute z-[-2]"></img>
//             {/* <h2 className="absolute top-5 right-10 text-white font-semibold text-5xl">Ariana Brea</h2> */}
//             <div className="bg-blanco rounded-tl-[75px] rounded-br-[75px] my-20 mx-10 flex flex-row z-10">
//             <div className="flex flex-col w-[50%] text-center items-end justify-center">
//                 <div className="w-[80%]">
//                 <h1 className="font-extrabold text-6xl text-azuloscuro">Construimos tu presencia online</h1>
//                 <h2 className="font-bold text-3xl my-2 text-azuloscuro">Desarrollo web personalizado para destacar en el mundo digital</h2>
//                 <div className="flex flex-row justify-center space-x-2 my-4">
//                 <button className="font-bold text-2xl text-celeste py-2 px-4 border-2 border-celeste rounded-[50px]">Agendá una reunión</button>
//                 <button className="font-bold text-2xl bg-celeste text-blanco py-2 px-4 rounded-[50px] border-2 border-celeste">Descubrir más</button>
//                 </div>  
//                 </div>
//             </div>
//             <div className="w-[50%] flex text-center items-center justify-start overflow-hidden">
//             <img src={notebook} className="w-[85%] objet-cover"></img>
//             </div>
//             </div>
//         </div>
//     )
// }
return (
    <div className="relative h-screen overflow-hidden">
        {/* Imagen de fondo */}
        <img src={fondo} className="absolute top-0 left-0 w-full h-full object-cover z-[-2]" alt="Background" />

        {/* Fondo semitransparente */}
        <div className="absolute top-0 left-0 w-full h-full bg-azuloscuro opacity-50 z-[-1]"></div>
        <h2 className="absolute top-5 right-10 text-white font-semibold text-5xl z-10">Ariana Brea</h2>
        {/* Contenido */}
        <div className="relative bg-blanco rounded-tl-[75px] rounded-br-[75px] my-20 mx-10 flex flex-row z-10">
            <div className="flex flex-col w-[50%] text-center items-end justify-center">
                <div className="w-[80%]">
                    <h1 className="font-extrabold text-6xl text-azuloscuro">Construimos tu presencia online</h1>
                    <h2 className="font-bold text-3xl my-2 text-azuloscuro">Desarrollo web personalizado para destacar en el mundo digital</h2>
                    <div className="flex flex-row justify-center space-x-2 my-4">
                        <button className="font-bold text-2xl text-celeste py-2 px-4 border-2 border-celeste rounded-[50px]">Agendá una reunión</button>
                        <button className="font-bold text-2xl bg-celeste text-blanco py-2 px-4 rounded-[50px] border-2 border-celeste">Descubrir más</button>
                    </div>
                </div>
            </div>
            <div className="w-[50%] flex text-center items-center justify-start overflow-hidden">
                <img src={notebook} className="w-[85%] object-cover" alt="Notebook" />
            </div>
        </div>
    </div>
);
};