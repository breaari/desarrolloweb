import { Corporativas } from "./corporativas"
import { LandingPages } from "./landingpage"
import { TiendaNube } from "./tiendanube"

export const Services = () => {
    return (
        <div className="bg-azuloscuro  flex flex-col items-center px-10 py-4 mq980:px-5">
            <h1 className="mq980:text-center text-blanco text-6xl font-extrabold relative py-2 px-4 rounded-md my-4 z-10 highlight-title mq980:text-5xl">Nuestros  paquetes  de  servicios</h1>
            <div className="flex flex-row justify-center space-x-2 my-4 mq980:flex-col mq980:space-x-0 mq980:space-y-2">
            <LandingPages></LandingPages>
            <Corporativas></Corporativas>
            <TiendaNube></TiendaNube>
            </div>
            
        </div>
    )
}