import notebook from "../../assets/notebook.png"
import fondo from "../../assets/fondo.png"

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
                    <h1 className="font-extrabold text-6xl text-azuloscuro mq980:text-5xl">Construimos tu presencia online</h1>
                    <h2 className="font-bold text-3xl my-2 text-azuloscuro mq980:text-2xl">Desarrollo web personalizado para destacar en el mundo digital</h2>
                    <div className="flex flex-row justify-center mq980:items-center space-x-2 my-4 mq980:flex-col mq980:space-x-0 mq980:space-y-2 ">
                        <button className="font-bold text-2xl mq980:text-xl text-celeste py-2 px-4 border-2 border-celeste rounded-[50px] mq980:w-[80%]">Agendá una reunión</button>
                        <button className="font-bold text-2xl mq980:text-xl bg-celeste text-blanco py-2 px-4 rounded-[50px] border-2 border-celeste mq980:w-[80%]">Descubrir más</button>
                    </div>
                </div>
            </div>
            <div className="w-[50%] flex text-center items-center justify-start overflow-hidden mq980:w-full mq980:justify-center mq980:h-[225px]">
                <img src={notebook} className="w-[85%] object-cover mq980:h-[300px] rounded-br-[100px] " alt="Notebook" />
            </div>
        </div>
    </div>
);
};